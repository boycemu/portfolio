const skills = [
  {
    title: 'UI / UX 设计',
    desc: 'B 端后台、C 端 App / 小程序、官网全链路界面与交互设计，从信息架构到高保真交付。',
    tags: ['Figma', 'Sketch', '墨刀', '交互原型']
  },
  {
    title: '品牌视觉全案',
    desc: 'Logo 设计、VI 物料、色彩与字体规范、官网视觉重塑，建立可复用的设计语言。',
    tags: ['Logo', 'VI', '色彩系统', '字体规范']
  },
  {
    title: '数据可视化大屏',
    desc: '工业监控、BIM+GIS 大场景、政务平台的数据可视化与二三维联动界面设计。',
    tags: ['GIS', 'BIM', '实时监控', '信息层级']
  },
  {
    title: '三维与动效',
    desc: 'C4D 三维建模、3D 场景工作台、宣传视频与工作流程动效图制作。',
    tags: ['C4D', 'AE', 'PR', '动效']
  },
  {
    title: 'AI 设计工作流',
    desc: '搭建 ComfyUI 工作流并通过 API 接入，用 AI 辅助批量生产电商与营销视觉素材。',
    tags: ['ComfyUI', '文生图', '工作流编排']
  },
  {
    title: '平面与插画',
    desc: '15 年美术 / 书法功底，覆盖字体设计、插画、高效图片处理与宣传物料。',
    tags: ['PS', 'AI', '插画', '书法']
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
