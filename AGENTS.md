# UI 设计指南

> **设计类型**: App 设计（应用架构设计）
> **确认检查**: 本指南适用于可交互的应用/网站/工具。

> ℹ️ Section 1-2 为设计意图与决策上下文。Code agent 实现时以 Section 3 及之后的具体参数为准。

## 1. Design Archetype (设计原型)

### 1.1 内容理解

- **目标用户**: 招聘方、行业合作者、教育机构合作伙伴，用于专业身份展示
- **核心目的**: 清晰展示个人专业背景与项目经验，建立专业可信度
- **期望情绪**: 专业、沉稳、简洁、可信
- **需避免的感受**: 花哨、杂乱、不专业、信息过载

### 1.2 设计语言

- **Aesthetic Direction**: 简约专业的个人作品集风格，保持现有简洁调性，突出内容可读性
- **Visual Signature**: 充足留白、清晰层次、低饱和度配色、卡片式信息分组
- **Emotional Tone**: 专业沉稳 — 体现教育技术领域专家的专业积淀
- **Design Style**: Editorial 经典排版 — 个人简历需要清晰的阅读层次，大字重对比+充裕留白突出专业信息
- **Application Type**: Landing / Portfolio - 个人作品集展示型网站

## 2. Design Principles (设计理念)

1. **内容优先**：让个人经历和项目成果成为视觉焦点，减少不必要的装饰干扰
2. **清晰层次**：通过排版对比建立信息层级，帮助阅读者快速捕捉核心信息
3. **专业可信**：克制的配色和简洁布局塑造专业形象，建立 viewer 信任感
4. **呼吸感**：保持充足留白，避免信息拥挤，提升阅读舒适度

## 3. Color System (色彩系统)

**配色设计理由**：个人简历需要专业沉稳的视觉感受，选择低饱和深蓝作为主色，建立信任感同时保持现代感，整体色调偏简约干净。

### 3.1 主题颜色

| 角色               | CSS 变量               | Tailwind Class            | HSL 值    
| ------------------ | ---------------------- | ------------------------- | ---------- 
| bg                 | `--background`         | `bg-background`           | hsl(210 20% 98%)
| card               | `--card`               | `bg-card`                 | hsl(0 0% 100%)
| text               | `--foreground`         | `text-foreground`         | hsl(215 25% 16%)
| textMuted          | `--muted-foreground`   | `text-muted-foreground`   | hsl(215 16% 40%)
| primary            | `--primary`            | `bg-primary`              | hsl(212 70% 45%)
| primary-foreground | `--primary-foreground` | `text-primary-foreground` | hsl(0 0% 100%)
| accent             | `--accent`             | `bg-accent`               | hsl(210 25% 95%)
| accent-foreground  | `--accent-foreground`  | `text-accent-foreground`  | hsl(215 25% 16%)
| border             | `--border`             | `border-border`           | hsl(210 15% 90%)

### 3.3 Topbar/Header 设计策略（仅当使用顶部导航时定义）

**背景策略**：使用 `bg-card` + 底部 `border-border` 分隔线，与内容区保持一致风格，维持简洁感

**文字与图标**：
- 默认态：使用 `text-muted-foreground`，保持低调不抢内容
- 激活态：使用 `text-foreground` + 字重加粗
- Hover 态：使用 `bg-accent` 作为背景高亮

**边框与分隔**：底部使用 `border-border` 1px 细线分隔，明确区分导航与内容区域

## 4. Typography (字体排版)

- **Heading**: Inter + 思源黑体中文回退 + system-ui, -apple-system, sans-serif
- **Body**: Inter + 思源黑体中文回退 + system-ui, -apple-system, sans-serif
- **字体导入**: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');`

**排版层级**:
- 页面大标题: `text-3xl font-bold tracking-tight`
- 区块标题: `text-xl font-semibold`
- 项目名称/副标题: `text-lg font-medium`
- 正文: `text-base font-normal leading-relaxed text-muted-foreground`
- 次要信息/时间: `text-sm text-muted-foreground`

## 5. Layout Strategy (布局策略)

### 5.1 结构方向

**导航策略**：顶部固定导航 → 两个页面都需要简洁导航，首页导航区在内容中，项目页导航在顶部，保持极简风格无需复杂侧边栏

**页面架构特征**：
- 首页：居中内容展示，单栏流式布局，信息从上到下连贯阅读
- 项目展示页：容器居中，项目卡片网格布局，清晰展示多个项目

### 5.2 响应式原则

**断点策略**：
- 移动端：单栏布局，内容占据全屏宽度（保留适当边距）
- 桌面端：内容限制在 `max-w-3xl`（首页）/ `max-w-4xl`（项目页），保持舒适阅读宽度

**内容密度**：
- 移动端增大内边距，确保触摸友好
- 桌面端保持适中留白，信息分组清晰

## 6. Visual Language (视觉语言)

**形态特征**：
- 经典排版 → 锐利直角 `rounded-sm` (0-4px)，无多余阴影，强调线条和留白
- 区块分隔使用细边框，保持干净专业
- 卡片使用白底+细边框，信息分组清晰

**装饰策略**：极简原则，不使用额外装饰元素，完全依靠排版和留白建立视觉层次

**动效原则**：
- 链接/按钮 hover 过渡时长 150ms，简洁响应
- 弹窗淡入淡出过渡，不干扰阅读

**可及性保障**：
- 文字与背景对比度 ≥ 4.5:1（大字号 ≥ 3:1）
- 主按钮与背景对比度满足 WCAG AA 标准
- 交互元素有明确的 hover/focus 反馈
- 所有图片包含 alt 描述