import { defineConfig } from "vitepress";
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

export default defineConfig({
  title: "豪blog",
  description: "基于 vite vue3 element-plus 组件库",
  lang: "cn-ZH",
  base: "/blog/",
  lastUpdated: false,
  cleanUrls: true,
  // srcDir: './pages',
  themeConfig:{
    logo: '/logo.jpeg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/best-hao/blog' }],
    nav,
    sidebar
  },
});
