import React from 'react';

export default function Logo({ size = 'medium', showGlow = true, className = '' }) {
  const heights = {
    small: 34,
    medium: 44,
    large: 56,
    xlarge: 68
  };

  const height = heights[size] || (typeof size === 'number' ? size : 44);

  return (
    <div
      className={`brand-logo-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        lineHeight: 1
      }}
    >
      <img
        src="/images/logo_transparent.png"
        alt="D-Code Tech Hub"
        className="brand-logo-img"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          filter: showGlow
            ? 'drop-shadow(0 0 14px rgba(0, 210, 255, 0.45))'
            : 'none',
          transition: 'transform 0.25s ease, filter 0.25s ease'
        }}
        onError={(e) => {
          // Fallback to cropped version if transparent fails
          if (!e.target.dataset.triedFallback) {
            e.target.dataset.triedFallback = 'true';
            e.target.src = '/images/logo_cropped.png';
          }
        }}
      />
    </div>
  );
}

