# UGA 游戏评分网站

游戏全生命周期追踪评价平台 - 网站版行业白皮书

## 项目结构

```
UGA/
├── frontend/          # 前端 (Next.js + React)
├── backend/           # 后端 (Node.js + Express)
└── docs/              # 文档
```

## 一期功能

- [ ] 首页（热门游戏、发售表、UGA 颁奖）
- [ ] 游戏评分页（媒体/KOL/海外评分聚合）
- [ ] Steam 数据抓取
- [ ] 评测聚合展示
- [ ] UGA 评选标识

## 技术栈

| 模块 | 技术 |
|------|------|
| 前端 | Next.js 14 + React + TailwindCSS |
| 后端 | Node.js + Express |
| 数据库 | SQLite (开发) / PostgreSQL (生产) |
| 爬虫 | Puppeteer + Cheerio |

## 快速开始

```bash
# 前端
cd frontend && npm install && npm run dev

# 后端
cd backend && npm install && npm run dev
```

## 参考

- Metacritic: https://www.metacritic.com/
- IMDb: https://www.imdb.com/
