import { defineConfig } from "vite";
import VitePluginVitepressDemo from "vite-plugin-vitepress-demo";

export default defineConfig({
  plugins: [VitePluginVitepressDemo({ glob: ["**/examples/**/*.vue"] })],
});
