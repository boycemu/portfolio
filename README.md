# 穆宏伟 · 个人作品集网站

暗色系 / 高级克制 / 科技感 — React + Vite 实现，PC 端优先，版心 1700px。

## 快速开始

```bash
npm install
npm run dev      # 开发预览，默认 http://localhost:5173 （已自动打开浏览器）
npm run build    # 打包到 dist/
npm run preview  # 本地预览打包产物
```

## 已完成模块

1. **全屏 Hero** — 粒子连线动态背景（`HeroCanvas.jsx`，作为视频背景占位）、大标题、固定导航栏、「开始合作」按钮
2. **关于我** — 头像（从简历提取）、个人介绍、联系方式、数据指标（8+ 年 / 30+ 项目 / 15 年美术）、工作经历时间线
3. **精选项目** — 大卡片（1 个通栏 + 6 个双列），当前为 CSS 抽象占位图
4. **个人优势** — 6 张能力卡片（UI/UX、品牌、数据大屏、三维动效、AI 工作流、平面插画）
5. **联系收尾页** — 整屏「有项目？LET'S TALK」+ 联系方式 + 版权栏

## 后续替换指引

- **真实视频背景**：把 `src/components/Hero.jsx` 里的 `<HeroCanvas />` 换成
  `<video autoPlay muted loop playsinline className="hero-canvas" src="/your-video.mp4" />`，
  并删掉 `HeroCanvas` 引用即可。
- **真实作品截图**：把图片放进 `public/works/`，然后在 `src/components/Works.jsx`
  里把每个项目的 `art` 渐变换成 `<img src="/works/xxx.jpg" />`（卡片已留好 `.work-visual` 容器）。
- **头像**：替换 `public/portrait.png`。
- **配色**：全局色板在 `src/index.css` 顶部 `:root`（主背景 `--bg`、点缀色 `--accent` 朱砂红）。
