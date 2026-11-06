const skills = [
  {
    title: 'UI / UX 设计',
    desc: 'B 端后台、C 端 App 与官网全链路。',
    tags: ['Figma', '交互原型']
  },
  {
    title: '品牌视觉全案',
    desc: 'Logo、VI、色彩与字体规范。',
    tags: ['VI', '字体']
  },
  {
    title: '数据可视化大屏',
    desc: '工业监控与二三维联动大屏。',
    tags: ['GIS', 'BIM']
  },
  {
    title: '三维与动效',
    desc: 'C4D 建模、3D 场景与动效。',
    tags: ['C4D', 'AE']
  },
  {
    title: 'AI 设计工作流',
    desc: 'ComfyUI 工作流批量出图。',
    tags: ['ComfyUI', 'API']
  },
  {
    title: '平面与插画',
    desc: '15 年美术功底，字体、插画、物料。',
    tags: ['插画', '书法']
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="eyebrow reveal"><span className="num">03</span> CAPABILITIES · 个人优势</div>
        <div className="skill-grid reveal">
          {skills.map((s, i) => (
            <div className="skill-card" key={s.title}>
              <div className="num">/ 0{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
