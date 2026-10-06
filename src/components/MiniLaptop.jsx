import React from 'react';

const LAPTOP_IMAGES = {
  c: '/images/laptop_c.png?v=pure_transparent_v3',
  cpp: '/images/laptop_cpp.png?v=pure_transparent_v3',
  java: '/images/laptop_java.png?v=pure_transparent_v3',
  python: '/images/laptop_python.png?v=pure_transparent_v3',
  web: '/images/laptop_web.png?v=pure_transparent_v3',
  dsa: '/images/laptop_dsa.png?v=pure_transparent_v3'
};

export default function MiniLaptop({ courseType }) {
  const imgSrc = LAPTOP_IMAGES[courseType] || LAPTOP_IMAGES.c;

  return (
    <div className="stylish-laptop-frame">
      <img
        src={imgSrc}
        alt={`${courseType} programming laptop preview`}
        className="stylish-laptop-img"
        loading="lazy"
      />
    </div>
  );
}

