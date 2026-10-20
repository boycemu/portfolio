import { useEffect, useRef } from 'react'

/**
 * SpectralDrape —— 光谱帷幕背景（React Bits Spectral Drape 等效）
 * 一层 3D 起伏的发光点阵，缓慢折叠波动，作为整页底层背景
 */
export default function SpectralDrape() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    let t = 0
    let raf

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      const gap = 26
      const cols = Math.ceil(w / gap) + 1
      const rows = Math.ceil(h / gap) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gap
          const y = j * gap
          // 双层正弦波折叠
          const z =
            Math.sin(i * 0.45 + t) * Math.cos(j * 0.36 + t * 1.1) * 34 +
            Math.sin((i + j) * 0.22 + t * 0.9) * 22
          const depth = (z + 56) / 112 // 0..1
          const size = 1.2 + depth * 2.2
          const alpha = 0.05 + depth * 0.22

          ctx.beginPath()
          ctx.arc(x, y + z * 0.5, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(130, 175, 255, ${alpha})`
          ctx.shadowColor = '#3b6cff'
          ctx.shadowBlur = depth * 14
          ctx.fill()
        }
      }
      ctx.shadowBlur = 0

      t += 0.006
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  )
}
