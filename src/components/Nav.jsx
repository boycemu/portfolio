import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
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
        <ul className="nav-links">
          <li><a href="#about">工作经历</a></li>
          <li><a href="#works">作品内容</a></li>
          <li><a href="#skills">个人优势</a></li>
          <li><a href="#contact">联系</a></li>
        </ul>
        <a href="#contact" className="nav-cta">联系方式 ↗</a>
      </div>
    </nav>
  )
}
