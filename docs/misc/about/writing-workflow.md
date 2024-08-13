
# Writing Workflow

首先，为什么要写 为什么这个网站要存在？
其实我之前几乎没有写过日志，都是直接开始写代码，尝试，Debug。

直到在一家理想公司实习，我养成了写文档的习惯。我开始意识到这的重要性。
写文档 有利于梳理 巩固知识，分析遇到的问题。有时你在实现的时候 可能脑子里有些方向和感觉，但一旦复杂起来 可能就会开始乱 开始迷失。
并且就算实现出来，过段时间 很可能就会忘记，很多细节 思考 习惯资料 都会丢失 - 如果没有文档。并且如果你没有表述出来的话，有可能你并没有真正彻底理解。


## 写作软件的选择

### 要求：
1. 能方便、快速起草编写修改
2. 最后导出成 MD文件+图片/文件包 for 每篇文章 (因为这是最基本通用的格式
3. 最后可能生成静态网页 架设到网站上

### 选项：
1. Notion - 老牌 有名 厚道 功能丰富；可一键导出md 可分享。无限文件和图片 (单个上限5M)
   但是，不是很顺手 - 比如没有常驻目录，标题不显示几级
2. 飞书云文档 - 新秀 很趁手 但是较为封闭 也不能一键打包下载 有点没底。
3. Gitbook - 缺少自定义性，有一定商业味道(设置网站图标要付钱)
4. 知乎 - 或许可以作为最后的分享引流平台。但未必适合原件编写？
5. Google Blogger - 有点老 不太好用 国内还不能访问


其他： 
- 语雀 - 好像还行 但是听说技术力不咋 出过几次故障，而且用户id还不能改 不太放心这种
- FlowUs - 好像盗版Notion，有总空间限制 200M，还不如notion


## 编写的要点

1. 快速写出框架，而不是一开始花时间在某个细节上
2. 迭代修改 丰富 优化



## 我如何搭建这个网站的?

### 0. VitePress

首先，我使用了 VitePress

```bash
npm add -D vitepress
```
(npm需要安装node.js)

### 1. 去除 .html 后缀

这个年代了，.html后缀对SEO估计也没啥帮助吧

#### 1. docs/.vitepress/config.ts 启用 `cleanUrls: true`
```ts{5}
// .vitepress/config.ts
export default defineConfig({
    title: "Elytra",
    ...
    cleanUrls: true,  // no .html suffix
    metaChunk: true,  // more Cache?
})
...
```

#### 2. 在你的 WebServer 写一下配置

我是Nginx，所以加上这个：
https://blog.mehdi.cc/articles/vitepress-cleanurls-on-nginx-environment

```nginx{10}
server {
    index index.html;
    # and other things…

    location / {
        # When `foo/bar` (which is `$uri`) is requested, 
        # try to serve the first existing file among the list: 
        # `foo/bar`, `foo/bar.html` or `foo/bar/index.html`. 
        # Otherwise answer with a 404 code.
        try_files $uri $uri.html $uri/ =404; 
    }
}
```

### 2. Layout Switch 插件: 

右上角那个 Layout Switch 和 Spotlight 的功能，我非常喜欢。

https://nolebase-integrations.ayaka.io/pages/en/integrations/vitepress-plugin-enhanced-readabilities/

首先安装这个插件
```bash
npm install @nolebase/vitepress-plugin-enhanced-readabilities -D
```
配置 docs/.vitepress/config.ts
```ts
// import { defineConfig } from 'vitepress'
// 
// // https://vitepress.dev/reference/site-config
// export default defineConfig({
   vite: { 
     optimizeDeps: { 
       exclude: [ 
         '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
       ], 
     }, 
     ssr: { 
       noExternal: [ 
         // If there are other packages that need to be processed by Vite, you can add them here.
         // '@nolebase/vitepress-plugin-enhanced-readabilities', 
         '@nolebase/*',  // 用这个，可以避免编译报错 不支持".vue"文件 的错误 
       ], 
     }, 
   }, 
//  lang: 'en',
//  title: 'Site Name',
//  themeConfig: {
//    // rest of the options...
//  }
//  // rest of the options...
//})
```

配置 docs/.vitepress/theme/index.ts
```ts
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import './styles/vars.css'
import './styles/main.css'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // A enhanced readabilities menu for wider screens
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
    })
  },
  enhanceApp() {
    // other configurations...
  },
}

export default Theme
```

修复社交链接右边的 glitch
```css
.VPSocialLinks.VPNavBarSocialLinks.social-links {
   margin-right: 0;
}
```



### 3. Math Equations

https://vitepress.dev/guide/markdown#math-equations

``` 
npm add -D markdown-it-mathjax3

// .vitepress/config.ts
export default {
  markdown: {
    math: true
  }
}
```

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

### 4. Analyze Integration

https://aptabase.com/