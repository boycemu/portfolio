import { useEffect, useRef } from 'react'

/**
 * ArcCursor —— 电光电弧光标拖尾（React Bits Arc Cursor 等效）
 * 跟随鼠标的蓝色闪电折线，带辉光和衰减
 */
export default function ArcCursor() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    const trail = [] // {x, y, life}
    const MAX = 44
    let mx = -100, my = -100, lastX = 0, lastY = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    // 生成锯齿折线
    const jag = (x1, y1, x2, y2, seg = 8, rough = 22) => {
      const pts = []
      for (let i = 0; i <= seg; i++) {
        const t = i / seg
        const x = x1 + (x2 - x1) * t + (i > 0 && i < seg ? (Math.random() - 0.5) * rough : 0)
        const y = y1 + (y2 - y1) * t + (i > 0 && i < seg ? (Math.random() - 0.5) * rough : 0)
        pts.push([x, y])
      }
      return pts
    }

    let raf
    const loop = () => {
      ctx.clearRect(0, 0, w, h)

      trail.push({ x: mx, y: my, life: 1 })
      if (trail.length > MAX) trail.shift()

      // 沿轨迹画电弧
      for (let i = 1; i < trail.length; i++) {
        const p0 = trail[i - 1]
        const p1 = trail[i]
        const flicker = 0.7 + Math.random() * 0.3
        const alpha = (i / trail.length) * trail[i].life * flicker
        const pts = jag(p0.x, p0.y, p1.x, p1.y, 9, 30)

        // 外层辉光
        ctx.beginPath()
        ctx.moveTo(pts[0][0], pts[0][1])
        for (let j = 1; j < pts.length; j++) ctx.lineTo(pts[j][0], pts[j][1])
        ctx.strokeStyle = `rgba(90, 140, 255, ${alpha * 0.9})`
        ctx.lineWidth = 3.5
        ctx.shadowColor = '#3b6cff'
        ctx.shadowBlur = 30
        ctx.stroke()

        // 中心亮线
        ctx.beginPath()
        ctx.moveTo(pts[0][0], pts[0][1])
        for (let j = 1; j < pts.length; j++) ctx.lineTo(pts[j][0], pts[j][1])
        ctx.strokeStyle = `rgba(235, 245, 255, ${alpha})`
        ctx.lineWidth = 1.4
        ctx.stroke()

        // 随机分叉小闪电
        if (Math.random() > 0.45) {
          const mid = pts[Math.floor(pts.length / 2)]
          const ex = mid[0] + (Math.random() - 0.5) * 90
          const ey = mid[1] + (Math.random() - 0.5) * 90
          ctx.beginPath()
          ctx.moveTo(mid[0], mid[1])
          ctx.lineTo(ex, ey)
          ctx.strokeStyle = `rgba(150, 190, 255, ${alpha * 0.6})`
          ctx.lineWidth = 1
          ctx.shadowBlur = 12
          ctx.stroke()
        }
      }

      // 头部光点
      if (trail.length) {
        const head = trail[trail.length - 1]
        ctx.beginPath()
        ctx.arc(head.x, head.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(180, 210, 255, 0.9)'
        ctx.shadowColor = '#3b6cff'
        ctx.shadowBlur = 20
        ctx.fill()
      }

      // 衰减
      for (const p of trail) p.life *= 0.965

      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
