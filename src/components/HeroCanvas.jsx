import { useEffect, useRef } from 'react'

/**
 * Hero 背景 —— 暗色粒子连线动画（作为视频背景的占位）。
 * 后续若要换成真实视频，可在 Hero 内直接放 <video> 覆盖全屏，
 * 并将本组件注释掉。
 */
export default function HeroCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w, h, raf
    let particles = []
    const mouse = { x: null, y: null }

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio
      const count = Math.min(90, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 22000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25 * window.devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * window.devicePixelRatio,
        r: (Math.random() * 1.4 + 0.6) * window.devicePixelRatio
      }))
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * window.devicePixelRatio
      mouse.y = (e.clientY - rect.top) * window.devicePixelRatio
    }

    const tick = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(236,234,229,0.35)'
        ctx.fill()
      }

      // 连线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          const max = 160 * window.devicePixelRatio
          if (dist < max) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(236,234,229,${0.08 * (1 - dist / max)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
        // 鼠标磁吸线
        if (mouse.x !== null) {
          const a = particles[i]
          const d = Math.hypot(a.x - mouse.x, a.y - mouse.y)
          const max = 220 * window.devicePixelRatio
          if (d < max) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(232,84,47,${0.25 * (1 - d / max)})`
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={ref} className="hero-canvas" />
}
