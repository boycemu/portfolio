/**
 * 作品分类目录 —— 四宫格
 */
const b = import.meta.env.BASE_URL
const cats = [
  { title: 'App 设计', en: 'APP DESIGN', img: `${b}works-cat/app.webp`, count: '12+', href: '#works' },
  { title: 'Web 设计', en: 'WEB DESIGN', img: `${b}works-cat/web.webp`, count: '15+', href: '#works' },
  { title: 'AIGC 设计', en: 'AIGC DESIGN', img: `${b}works-cat/aigc.webp`, count: '20+', href: `${b}aigc.html` },
  { title: '视觉设计', en: 'VISUAL', img: `${b}works-cat/visual.webp`, count: '30+', href: `${b}pingmian.html` },
]

export default function Categories() {
  return (
    <section className="section cat-section" id="categories">
      <div className="container">
        <div className="works-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="num">02</span> CATEGORIES · 分类目录
            </div>
            <h2>作品<br/>分类</h2>
          </div>
          <div className="count">— 04 TRACKS / 2019 — 2026</div>
        </div>

        <div className="cat-grid">
          {cats.map((c) => (
            <a href={c.href} className="cat-card reveal">
              <div className="cat-visual">
                <img loading="lazy" src={c.img} alt={c.title} />
              </div>
              <div className="cat-info">
                <div>
                  <div className="cat-title">{c.title}</div>
                  <div className="cat-en">{c.en}</div>
                </div>
                <div className="cat-count">{c.count}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
