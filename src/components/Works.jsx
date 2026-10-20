/**
 * 精选项目
 */
const b = import.meta.env.BASE_URL
const works = [
  {
    title: '一点臻享-华为体验店',
    cat: '线下门店 · C 端营销 · 2023',
    img: `${b}works/yidian.png`,
    detail: `${b}yidian.html`
  },
  {
    title: '跃通体质云',
    cat: 'B 端后台 · 家长端 · 2024',
    img: `${b}works/tizhi-cover.png`,
    detail: `${b}tizhi.html`
  },
  {
    title: '鹊山精煤网站',
    cat: '企业官网 · 工业 · 2022',
    img: `${b}works/queshan.png`,
    detail: `${b}queshan.html`
  },
  {
    title: '宾南高速公路大屏',
    cat: '三维可视化 · 大屏 · 2021',
    img: `${b}works/binnan.png`,
    detail: `${b}binnan.html`
  },
  {
    title: '平面视觉设计',
    cat: '品牌 · 海报 · 物料',
    img: `${b}works/pingmian.png`,
    detail: `${b}pingmian.html`
  },
  {
    title: 'AIGC 设计',
    cat: 'AI 工作流 · 生成视觉',
    img: `${b}works/aigc.png`,
    detail: `${b}aigc.html`
  },
]

export default function Works() {
  return (
    <section className="section" id="works">
      <div className="container">
        <div className="works-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="num">03</span> SELECTED WORKS · 精选项目
            </div>
            <h2>作品<br />精选</h2>
          </div>
          <div className="count">— 06 PROJECTS / 2021 — 2026</div>
        </div>

        <div className="work-grid">
          {works.map((w) => (
            <a key={w.title} href={w.detail} className="work-card reveal">
              <div className="work-visual">
                <img src={w.img} alt={w.title} />
              </div>
              <div className="work-info">
                <div>
                  <div className="work-title">{w.title}</div>
                  <div className="work-cat">{w.cat}</div>
                </div>
                <div className="work-arrow">↗</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
