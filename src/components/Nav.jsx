import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // 用 IntersectionObserver 侦测滚动位置，避免每帧 scroll 回调
  useEffect(() => {
    const sentinel = document.querySelector('.nav-sentinel')
    if (!sentinel) return
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="主导航">
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="logo-dot" />
          BOYCE&nbsp;2026
          <span className="logo-arrow">↘</span>
        </a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setOpen(false)}>工作经历</a></li>
          <li><a href="#works" onClick={() => setOpen(false)}>作品内容</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>个人优势</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>联系</a></li>
        </ul>
        <div className="nav-right">
          <a href="#contact" className="nav-cta">联系我 ↗</a>
          <button
            className="nav-burger"
            onClick={() => setOpen(!open)}
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
