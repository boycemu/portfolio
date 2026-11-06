import { useEffect, useRef } from 'react'

/**
 * SpectralDrape —— 背景点阵帷幕
 * 一层缓慢起伏的细点阵，作为整页最底层的纹理
 */
export default function SpectralDrape() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const gap = 26

    let w = window.innerWidth
    let h = window.innerHeight
    let t = 0
    let raf = 0
    let last = 0

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const render = () => {
      ctx.clearRect(0, 0, w, h)
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
          // 中性灰蓝点阵，不发光
          ctx.fillStyle = `rgba(142, 153, 174, ${alpha * 0.6})`
          ctx.fill()
        }
      }
    }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      render()
    }

    // 30fps 上限：点阵是慢速背景，不需要每帧重绘
    const loop = (now) => {
      raf = requestAnimationFrame(loop)
      if (now - last < 33) return
      last = now
      t += 0.012
      render()
    }

    resize()
    window.addEventListener('resize', resize)
    if (!reduce) raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas className="drape" ref={ref} aria-hidden="true" />
}
