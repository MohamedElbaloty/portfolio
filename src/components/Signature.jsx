import React, { useEffect, useState } from 'react'

/**
 * Uses `public/signature.png` and converts it at runtime into an alpha mask (removes white bg),
 * then tints it with the site's gradient. This avoids the "white rectangle" look.
 */
const Signature = ({ className = '' }) => {
  const [maskUrl, setMaskUrl] = useState(null)

  useEffect(() => {
    let cancelled = false

    const img = new Image()
    img.decoding = 'async'
    img.loading = 'eager'
    img.src = '/signature.png'

    img.onload = () => {
      if (cancelled) return

      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth || 520
      canvas.height = img.naturalHeight || 120

      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Build alpha mask from luminance: white bg -> alpha 0, dark ink -> alpha 255
      // Keep anti-aliasing by mapping near-white pixels to low alpha.
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const a = data[i + 3]

        if (a === 0) {
          data[i] = 255
          data[i + 1] = 255
          data[i + 2] = 255
          data[i + 3] = 0
          continue
        }

        const lum = (r + g + b) / 3

        // If pixel is close to white, make it transparent.
        // Otherwise invert luminance to alpha for smooth edges.
        let alpha = 0
        if (lum < 252) {
          alpha = Math.min(255, Math.max(0, (255 - lum) * 4))
        }

        data[i] = 255
        data[i + 1] = 255
        data[i + 2] = 255
        data[i + 3] = alpha
      }

      ctx.putImageData(imageData, 0, 0)
      const url = canvas.toDataURL('image/png')
      if (!cancelled) setMaskUrl(url)
    }

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <span
      className={`signature-mark ${className}`}
      aria-label="Mohamed Ezzat"
      role="img"
      style={
        maskUrl
          ? {
              WebkitMaskImage: `url(${maskUrl})`,
              maskImage: `url(${maskUrl})`,
            }
          : undefined
      }
    />
  )
}

export default Signature


