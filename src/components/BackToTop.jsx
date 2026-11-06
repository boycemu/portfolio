import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)

  // 用 IntersectionObserver 判断是否已滑过首屏
  useEffect(() => {
    const sentinel = document.querySelector('.nav-sentinel')
    if (!sentinel) return
    const io = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 }
    )
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`side-actions ${show ? 'show' : ''}`}>
      <button
        className={`side-btn side-btn-qr ${qrOpen ? 'open' : ''}`}
        onClick={() => setQrOpen((v) => !v)}
        aria-label="微信二维码"
        aria-expanded={qrOpen}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <path d="M14 14h3v3h-3z" />
          <path d="M18.5 18.5h2.5v2.5h-2.5z" />
        </svg>
        <span className="qr-pop">
          <img src={import.meta.env.BASE_URL + 'images/wechat-qr.jpg'} alt="穆宏伟微信二维码" />
          <span>扫码加我微信</span>
        </span>
      </button>
      <button
        className="side-btn side-btn-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="回到顶部"
      >
        ↑
      </button>
    </div>
  )
}
