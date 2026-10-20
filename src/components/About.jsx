/**
 * 关于我 —— 直接使用设计稿整图，
 * 进入视口时播放：横向擦除揭幕 + 蓝光扫过 + 轻微缩放。
 */
export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-frame reveal">
          <div className="about-wipe">
            <img src="/about.png" alt="穆宏伟 个人简介" />
          </div>
          <div className="about-sweep" />
          <span className="corner tl" /><span className="corner tr" />
          <span className="corner bl" /><span className="corner br" />
        </div>
      </div>
    </section>
  )
}
