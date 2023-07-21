import { defineConfig } from "vitepress";
export default defineConfig({
  title: "Hao Vnet Ui",
  description: "基于 vite vue3 element-plus 组件库",
  lang: "cn-ZH",
  base: "/blog/",
  lastUpdated: false,
  cleanUrls: true,
  themeConfig:{
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com' }],
    nav: [
      { text: '指南', link: '/guide' },
      {
        text: '组件',
        items: [
          { text: '组件A', link: '/item-1' },
          { text: '组件B', link: '/item-2' },
          { text: '组件C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ]
  }
});
