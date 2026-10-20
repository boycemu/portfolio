import { useEffect, useRef } from 'react'

/**
 * GlassCursor —— 玻璃光标透镜（React Bits Glass Cursor 等效）
 * 跟随鼠标的圆形玻璃片，对下方内容做磨砂 + 提亮折射
 */
export default function GlassCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    let raf
    let tx = -200, ty = -200, cx = -200, cy = -200

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      // 平滑跟随
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      el.style.transform = `translate3d(${cx - 45}px, ${cy - 45}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 90,
        height: 90,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        backdropFilter: 'blur(6px) saturate(1.6) brightness(1.15)',
        WebkitBackdropFilter: 'blur(6px) saturate(1.6) brightness(1.15)',
        border: 'none',
        boxShadow:
          'inset 0 0 20px rgba(120,170,255,0.12), 0 8px 30px rgba(0,0,0,0.35)',
      }}
    />
  )
}
