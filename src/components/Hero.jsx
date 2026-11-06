/**
 * 封面 Hero —— 整图背景 + 左侧文字叠加
 */
import GlitchText from './GlitchText'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <video className="hero-bg" src={import.meta.env.BASE_URL + "hero-bg.mp4"} autoPlay muted loop playsInline />
      <div className="hero-inner">
        {/* 左侧文案 */}
        <div className="hero-left">
          <div className="hello-tag">
            <span className="dot" /> HELLO, I'M
          </div>
          <div className="hero-name-wrap">
            <GlitchText className="hero-name" speed={1.2} enableShadows>
              穆宏伟
            </GlitchText>
          </div>
          <div className="hero-role-wrap">
            <GlitchText className="hero-role" speed={1.4} enableShadows>
              UI / Visual Designer
            </GlitchText>
          </div>
          <p className="hero-desc">
            8 年 B 端后台、C 端产品与数据大屏设计，
            15 年美术功底落在间距、层级和交互节奏上。
          </p>
          <div className="hero-btns">
            <a href="#works" className="btn-primary">查看作品 →</a>
            <a href="#about" className="btn-play">
              <span className="circle">▶</span>
              <span className="play-label">
                看工作经历<small>SCROLL</small>
              </span>
            </a>
          </div>

          {/* 数据卡 */}
          <div className="hero-stats">
            <div className="hs-cell"><b>8<span>+</span></b><small>Years Experience</small></div>
            <div className="hs-cell"><b>30<span>+</span></b><small>Projects Completed</small></div>
            <div className="hs-cell"><b>15<span>年</span></b><small>Art Foundation</small></div>
            <div className="hs-cell"><b>6<span>类</span></b><small>Design Deliverables</small></div>
          </div>
        </div>
      </div>

      {/* 底部条 */}
      <div className="hero-bottom">
        <span className="scroll-tip"><i className="dot" /> SCROLL TO EXPLORE</span>
        <span className="brand-tag">DESIGN / CREATE / INSPIRE</span>
      </div>

      {/* 导航滚动侦测锚点 */}
      <div className="nav-sentinel" aria-hidden="true" />
    </header>
  )
}
