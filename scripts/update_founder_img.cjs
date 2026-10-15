const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\thora\\.gemini\\antigravity-ide\\brain\\26022a8f-b9e1-4a66-a73f-c5dc643c0645\\.user_uploaded\\media_1792087288869.png';
const destPng = path.join(__dirname, '..', 'public', 'images', 'founder_dipali_dube.png');
const destJpg = path.join(__dirname, '..', 'public', 'images', 'founder_dipali_dube.jpg');

fs.copyFileSync(src, destPng);
fs.copyFileSync(src, destJpg);
console.log('Successfully copied founder image to public/images/founder_dipali_dube.png and .jpg');
