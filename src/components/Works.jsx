/**
 * 精选项目
 */
const works = [
  {
    title: '一点臻享-华为体验店',
    cat: '线下门店 · C 端营销 · 2023',
    img: '/works/yidian.png',
    detail: '/yidian.html'
  },
  {
    title: '跃通体质云',
    cat: 'B 端后台 · 家长端 · 2024',
    img: '/works/tizhi-cover.png',
    detail: '/tizhi.html'
  },
  {
    title: '鹊山精煤网站',
    cat: '企业官网 · 工业 · 2022',
    img: '/works/queshan.png',
    detail: '/queshan.html'
  },
  {
    title: '宾南高速公路大屏',
    cat: '三维可视化 · 大屏 · 2021',
    img: '/works/binnan.png',
    detail: '/binnan.html'
  },
  {
    title: '平面视觉设计',
    cat: '品牌 · 海报 · 物料',
    img: '/works/pingmian.png',
    detail: '/pingmian.html'
  },
  {
    title: 'AIGC 设计',
    cat: 'AI 工作流 · 生成视觉',
    img: '/works/aigc.png',
    detail: '/aigc.html'
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
          <div className="count">— 06 PROJECTS / 2019 — 2026</div>
        </div>

        <div className="work-grid">
          {works.map((w, i) => (
            w.detail ? (
              <a
                key={w.title}
                href={w.detail}
                target="_blank"
                rel="noreferrer"
                className={`work-card reveal ${w.featured ? 'featured' : ''}`}
              >
                <div className="work-visual">
                  {w.img ? <img className="art-img" src={w.img} alt={w.title} /> : <div className="art" style={w.art} />}
                  <span className="idx">/{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="work-info">
                  <div>
                    <div className="title">{w.title}</div>
                    <div className="cat">{w.cat}</div>
                  </div>
                  <div className="arrow">↗</div>
                </div>
              </a>
            ) : (
              <article
                key={w.title}
                className={`work-card reveal ${w.featured ? 'featured' : ''}`}
              >
                <div className="work-visual">
                  {w.img ? <img className="art-img" src={w.img} alt={w.title} /> : <div className="art" style={w.art} />}
                  <span className="idx">/{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="work-info">
                  <div>
                    <div className="title">{w.title}</div>
                    <div className="cat">{w.cat}</div>
                  </div>
                  <div className="arrow">↗</div>
                </div>
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
