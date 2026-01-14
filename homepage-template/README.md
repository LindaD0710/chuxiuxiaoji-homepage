# 初秀小集 - 主页项目

这是 `chuxiuxiaoji.com` 的主页项目，用于展示所有产品。

## 快速开始

1. **安装依赖**：
```bash
npm install
```

2. **修改 `vercel.json`**：
   - 将 `YOUR-IELTS-PROJECT.vercel.app` 替换为你当前 IELTS 项目在 Vercel 上的实际域名
   - 例如：`https://ielts-novel-flow-xxx.vercel.app`

3. **本地开发**：
```bash
npm run dev
```

4. **部署到 Vercel**：
   - 将代码推送到 GitHub
   - 在 Vercel 导入项目
   - 绑定域名 `chuxiuxiaoji.com`

## 配置说明

### vercel.json 中的 rewrites

这个配置会将 `/ielts-novel/*` 的所有请求转发到你的 IELTS 项目：

```json
{
  "rewrites": [
    {
      "source": "/ielts-novel/:path*",
      "destination": "https://YOUR-IELTS-PROJECT.vercel.app/:path*"
    }
  ]
}
```

### 添加新产品

当你有新产品时，只需在 `vercel.json` 中添加新的 rewrite 规则：

```json
{
  "rewrites": [
    {
      "source": "/ielts-novel/:path*",
      "destination": "https://ielts-novel-flow.vercel.app/:path*"
    },
    {
      "source": "/new-product/:path*",
      "destination": "https://new-product.vercel.app/:path*"
    }
  ]
}
```

然后在 `app/page.tsx` 中添加产品链接即可。
