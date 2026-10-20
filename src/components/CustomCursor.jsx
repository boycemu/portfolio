import { useEffect, useRef } from 'react'

/**
 * CustomCursor —— 圆环+准点自定义光标（React Bits Custom Cursor 等效）
 * 小点即时跟随，圆环缓动延迟跟随；悬停可交互元素时圆环放大变形
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mx = -100, my = -100, rx = -100, ry = -100
    let hovering = false
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }
    const onOver = (e) => {
      const t = e.target
      if (t.closest('a, button, .work-card, .skill-card, .method-cell, .social-col a, .btn-primary, .btn-play')) {
        hovering = true
        ring.classList.add('is-hover')
      } else {
        hovering = false
        ring.classList.remove('is-hover')
      }
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`
      ring.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    // 隐藏系统光标
    document.body.style.cursor = 'none'
    const style = document.createElement('style')
    style.textContent = 'a, button { cursor: none; }'
    document.head.appendChild(style)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.body.style.cursor = ''
      style.remove()
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  )
}
