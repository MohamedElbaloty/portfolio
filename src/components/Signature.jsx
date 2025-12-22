import React from 'react'

/**
 * Uses `public/signature.png` and colors it with the site's gradient via CSS masking.
 * This keeps the signature "ink" in the same theme colors while preserving the PNG shape.
 */
const Signature = ({ className = '' }) => {
  return (
    <span
      className={`signature-mark ${className}`}
      aria-label="Mohamed Ezzat"
      role="img"
    />
  )
}

export default Signature


