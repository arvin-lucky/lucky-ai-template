# Lucky AI Template

>

## TOC

```
├── public/                          # 静态资源（图片、字体等）
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # 主布局文件
│   │   ├── page.tsx                     # 首页页面（根页面）
│   │   ├── about/
│   │   │   ├── page.tsx                 # 关于页
│   │   │   └── layout.tsx               # 关于页的布局（如果有的话）
│   │   ├── dashboard/
│   │   │   ├── layout.tsx               # 仪表盘布局
│   │   │   ├── page.tsx                 # 仪表盘首页
│   │   │   ├── settings/
│   │   │   │   ├── page.tsx             # 设置页
│   │   │   │   └── layout.tsx           # 设置页布局（如果有的话）
│   │   │   └── users/
│   │   │   │   ├── page.tsx             # 用户管理页
│   │   │   │   └── layout.tsx           # 用户管理页布局（如果有的话）
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx                 # 博客首页
│   │   │   │   └── [slug]/
│   │   │   │   └── page.tsx             # 博客文章详情页
│   │   │   └── not-found.tsx                # 404 页面
│   ├── components/                      # 可复用组件
│   │   ├── Button.tsx                   # 按钮组件
│   │   ├── Header.tsx                   # 页头组件
│   │   └── Footer.tsx                   # 页脚组件
│   ├── lib/                             # 存放一些工具和自定义 hook
│   │   ├── api.ts                       # API 请求相关函数
│   │   └── auth.ts                      # 身份验证逻辑
│   ├── styles/                          # 全局样式和 CSS 文件
│   │   ├── globals.css                  # 全局样式
│   │   └── Home.module.css              # 首页样式
│   ├── types/                           # TypeScript 类型声明
│   │   ├── index.d.ts                   # 全局类型声明
│   │   └── blog.d.ts                    # 博客相关的类型声明
├── .env.local                       # 本地环境变量
├── next.config.js                   # Next.js 配置文件
├── tsconfig.json                    # TypeScript 配置文件
└── package.json                     # 项目配置文件

```

## Browsers

Next.js

- Chrome 64+ Chrome 64+：Chrome 64 及以上版本
- Edge 79+ Edge 79+：Edge 79+
- Firefox 67+
- Opera 51+ 歌剧 51+
- Safari 12+

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
