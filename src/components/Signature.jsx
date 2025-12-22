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
      let minX = canvas.width
      let minY = canvas.height
      let maxX = 0
      let maxY = 0
      const alphaThreshold = 12

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

        // Track bounds of visible ink for cropping
        if (alpha > alphaThreshold) {
          const px = (i / 4) % canvas.width
          const py = Math.floor(i / 4 / canvas.width)
          if (px < minX) minX = px
          if (py < minY) minY = py
          if (px > maxX) maxX = px
          if (py > maxY) maxY = py
        }
      }

      ctx.putImageData(imageData, 0, 0)

      // Crop around ink to remove empty margins (lets us scale visually without pushing layout)
      const pad = 10
      const hasInk = minX <= maxX && minY <= maxY
      if (hasInk) {
        const cropX = Math.max(0, minX - pad)
        const cropY = Math.max(0, minY - pad)
        const cropW = Math.min(canvas.width - cropX, (maxX - minX + 1) + pad * 2)
        const cropH = Math.min(canvas.height - cropY, (maxY - minY + 1) + pad * 2)

        const cropped = document.createElement('canvas')
        cropped.width = cropW
        cropped.height = cropH
        const cctx = cropped.getContext('2d')
        if (cctx) {
          cctx.putImageData(ctx.getImageData(cropX, cropY, cropW, cropH), 0, 0)
          const url = cropped.toDataURL('image/png')
          if (!cancelled) setMaskUrl(url)
          return
        }
      }

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


