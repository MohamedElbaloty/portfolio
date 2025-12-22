import React from 'react'

/**
 * Signature-style SVG for "Mohamed Ezzat".
 * Uses the loaded Google Font "Great Vibes" (see `index.html`).
 */
const Signature = ({ className = '' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 520 120"
      role="img"
      aria-label="Mohamed Ezzat"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sig-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>

        {/* subtle ink glow */}
        <filter id="sig-glow" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.7" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 0.25 0
            "
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(12 86) rotate(-2)">
        <text
          x="0"
          y="0"
          fill="url(#sig-grad)"
          stroke="url(#sig-grad)"
          strokeWidth="0.6"
          paintOrder="stroke"
          filter="url(#sig-glow)"
          fontFamily="'Great Vibes', cursive"
          fontSize="82"
          letterSpacing="-2"
        >
          Mohamed Ezzat
        </text>
      </g>
    </svg>
  )
}

export default Signature


