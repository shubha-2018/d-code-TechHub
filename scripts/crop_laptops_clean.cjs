const fs = require('fs');
const zlib = require('zlib');

const srcPath = 'C:/Users/thora/.gemini/antigravity-ide/brain/1415dc71-d75f-4f50-959a-23c54d24a7f6/.user_uploaded/media_1791268685974.png';
const buffer = fs.readFileSync(srcPath);

let pos = 8, width = 0, height = 0, bitDepth = 0, colorType = 0;
const idatChunks = [];
while (pos < buffer.length) {
  const len = buffer.readUInt32BE(pos);
  const type = buffer.toString('ascii', pos + 4, pos + 8);
  const data = buffer.slice(pos + 8, pos + 8 + len);
  pos += 12 + len;
  if (type === 'IHDR') {
    width = data.readUInt32BE(0);
    height = data.readUInt32BE(4);
    bitDepth = data.readUInt8(8);
    colorType = data.readUInt8(9);
  } else if (type === 'IDAT') idatChunks.push(data);
  else if (type === 'IEND') break;
}

const uncompressed = zlib.inflateSync(Buffer.concat(idatChunks));
const bytesPerPixel = colorType === 6 ? 4 : colorType === 2 ? 3 : 4;
const stride = 1 + width * bytesPerPixel;
const prevRow = Buffer.alloc(width * bytesPerPixel);
const rows = [];

for (let y = 0; y < height; y++) {
  const filter = uncompressed[y * stride];
  const start = y * stride + 1;
  const cur = Buffer.alloc(width * bytesPerPixel);
  for (let i = 0; i < width * bytesPerPixel; i++) {
    const raw = uncompressed[start + i];
    const a = (i >= bytesPerPixel) ? cur[i - bytesPerPixel] : 0;
    const b = prevRow[i];
    const c = (i >= bytesPerPixel) ? prevRow[i - bytesPerPixel] : 0;
    let val = 0;
    if (filter === 0) val = raw;
    else if (filter === 1) val = (raw + a) & 0xff;
    else if (filter === 2) val = (raw + b) & 0xff;
    else if (filter === 3) val = (raw + Math.floor((a + b) / 2)) & 0xff;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
      let pr = a;
      if (pb < pa && pb <= pc) pr = b;
      else if (pc < pa && pc <= pb) pr = c;
      val = (raw + pr) & 0xff;
    }
    cur[i] = val;
  }
  cur.copy(prevRow);
  rows.push(Buffer.from(cur));
}

function savePng(outW, outH, getPixelFn, outPath) {
  const rawData = Buffer.alloc(outH * (1 + outW * 4));
  for (let y = 0; y < outH; y++) {
    const rowOffset = y * (1 + outW * 4);
    rawData[rowOffset] = 0;
    for (let x = 0; x < outW; x++) {
      const [r, g, b, a] = getPixelFn(x, y);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const idat = zlib.deflateSync(rawData);
  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    crcTable[n] = c;
  }
  function crc32(b) {
    let c = 0xffffffff;
    for (let i = 0; i < b.length; i++) c = crcTable[(c ^ b[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }
  function makeChunk(t, d) {
    const chunk = Buffer.alloc(12 + d.length);
    chunk.writeUInt32BE(d.length, 0);
    chunk.write(t, 4, 4, 'ascii');
    d.copy(chunk, 8);
    chunk.writeUInt32BE(crc32(chunk.slice(4, 8 + d.length)), 8 + d.length);
    return chunk;
  }
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(outW, 0);
  ihdr.writeUInt32BE(outH, 4);
  ihdr.writeUInt8(8, 8);
  ihdr.writeUInt8(6, 9);
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);
  const outBuf = Buffer.concat([
    sig,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', idat),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
  fs.writeFileSync(outPath, outBuf);
  console.log(`Saved ${outPath}`);
}

// Exact bounds of only the laptop (starting past the button/text)
// Laptop width is approx 84px, height approx 80px
const boxes = [
  { name: 'laptop_c', x1: 215, y1: 104, x2: 298, y2: 187 },
  { name: 'laptop_cpp', x1: 526, y1: 104, x2: 610, y2: 187 },
  { name: 'laptop_java', x1: 834, y1: 104, x2: 918, y2: 187 },
  { name: 'laptop_python', x1: 215, y1: 226, x2: 298, y2: 309 },
  { name: 'laptop_web', x1: 526, y1: 226, x2: 610, y2: 309 },
  { name: 'laptop_dsa', x1: 834, y1: 226, x2: 918, y2: 309 }
];

boxes.forEach(b => {
  const w = b.x2 - b.x1 + 1;
  const h = b.y2 - b.y1 + 1;
  savePng(w, h, (px, py) => {
    const sx = b.x1 + px;
    const sy = b.y1 + py;
    const idx = sx * bytesPerPixel;
    const r = rows[sy][idx];
    const g = rows[sy][idx+1];
    const bl = rows[sy][idx+2];
    const minC = Math.min(r, g, bl);
    if (minC >= 252) return [255, 255, 255, 0];
    if (minC >= 246) {
      const alpha = (255 - minC) / 9;
      return [r, g, bl, Math.round(alpha * 255)];
    }
    return [r, g, bl, 255];
  }, `public/images/${b.name}.png`);
});
