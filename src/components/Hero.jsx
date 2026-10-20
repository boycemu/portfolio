/**
 * 封面 Hero —— 整图背景 + 左侧文字叠加
 */
import GlitchText from './GlitchText'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <video className="hero-bg" src="/hero-bg.mp4" autoPlay muted loop playsInline />
      <div className="hero-inner">
        {/* 左侧文案 */}
        <div className="hero-left">
          <div className="hello-tag">
            <span className="dot" /> HELLO, I'M
          </div>
          <div className="hero-name-wrap">
            <GlitchText
              speed={1.2}
              enableShadows
              style={{ fontSize: 'clamp(72px, 9vw, 140px)' }}
            >
              穆宏伟
            </GlitchText>
          </div>
          <div className="hero-role-wrap">
            <GlitchText
              speed={1.4}
              enableShadows
              style={{ fontSize: 'clamp(38px, 4.4vw, 68px)', color: '#4d8bff' }}
            >
              UI / Visual Designer
            </GlitchText>
          </div>
          <p className="hero-desc">
            8 年+ B 端后台、C 端产品与数据大屏设计经验，
            用 15 年美术功底做克制而精准的界面，把想法变成有质感的数字产品。
          </p>
          <div className="hero-btns">
            <a href="#works" className="btn-primary">查看作品 →</a>
            <a href="#about" className="btn-play">
              <span className="circle">▶</span>
              <span className="play-label">
                了解我<small>SCROLL</small>
              </span>
            </a>
          </div>

          {/* 数据玻璃卡 */}
          <div className="hero-stats">
            <div className="hs-cell"><b>8<span>+</span></b><small>Years<br/>Experience</small></div>
            <div className="hs-cell"><b>30<span>+</span></b><small>Projects<br/>Completed</small></div>
            <div className="hs-cell"><b>15<span>年</span></b><small>Art<br/>Foundation</small></div>
            <div className="hs-cell"><b>100<span>%</span></b><small>Focus<br/>on Detail</small></div>
          </div>
        </div>
      </div>

      {/* 底部条 */}
      <div className="hero-bottom">
        <span className="scroll-tip"><i className="dot" /> SCROLL TO EXPLORE</span>
        <span className="brand-tag">DESIGN / CREATE / INSPIRE</span>
      </div>
    </header>
  )
}
