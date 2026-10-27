import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className={`side-actions ${show ? 'show' : ''}`}>
      <button
        className="side-btn side-btn-qr"
        aria-label="微信二维码"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <path d="M14 14h3v3h-3z" />
          <path d="M18.5 18.5h2.5v2.5h-2.5z" />
        </svg>
        <div className="qr-pop">
          <img src="/images/wechat-qr.jpg" alt="微信二维码" />
          <span>扫码加我微信</span>
        </div>
      </button>
      <button
        className="side-btn side-btn-top"
        onClick={toTop}
        aria-label="回到顶部"
      >
        ↑
      </button>
    </div>
  )
}
