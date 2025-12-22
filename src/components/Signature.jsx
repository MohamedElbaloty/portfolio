import React from 'react'

/**
 * Uses `public/signature.png` and colors it with the site's gradient via an SVG luminance mask.
 * This works even if the PNG has a white background (black ink on white).
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

        {/* invert the png so black ink becomes white for luminance masking */}
        <filter id="sig-invert" x="0" y="0" width="100%" height="100%">
          <feComponentTransfer>
            <feFuncR type="table" tableValues="1 0" />
            <feFuncG type="table" tableValues="1 0" />
            <feFuncB type="table" tableValues="1 0" />
          </feComponentTransfer>
        </filter>

        <mask id="sig-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="520" height="120" maskContentUnits="userSpaceOnUse" mask-type="luminance">
          <image
            href="/signature.png"
            x="0"
            y="0"
            width="520"
            height="120"
            preserveAspectRatio="xMinYMid meet"
            filter="url(#sig-invert)"
          />
        </mask>

        <filter id="sig-shadow" x="-20%" y="-40%" width="140%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#8b5cf6" floodOpacity="0.35" />
        </filter>
      </defs>

      <rect
        x="0"
        y="0"
        width="520"
        height="120"
        fill="url(#sig-grad)"
        mask="url(#sig-mask)"
        filter="url(#sig-shadow)"
      />
    </svg>
  )
}

export default Signature


