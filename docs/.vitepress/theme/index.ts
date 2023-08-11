import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import HaoUi from "hao-ui";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { AntdTheme } from "vite-plugin-vitepress-demo/theme";

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus);
    app.use(HaoUi);
    app.component("Demo", AntdTheme);
  },
} as Theme;
