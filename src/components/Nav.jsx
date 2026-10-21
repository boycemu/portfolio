import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
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
          <a href="#contact" className="nav-cta">联系方式 ↗</a>
          <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="菜单">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
