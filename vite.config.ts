/*
 * @Author       : yuhailong
 * @Date         : 2023-07-17 17:17:09
 * @LastEditors  : yuhailong
 * @LastEditTime : 2023-11-20 17:46:13
 * @FilePath     : /vite.config.ts
 * @Description  :
 * Copyright 2023 yanzhong, All Rights Reserved.
 * 2023-07-17 17:17:09
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { devPlugin, getReplacer } from "./plugins/devPlugin";
import optimizer from "vite-plugin-optimizer";
import { buildPlugin } from "./plugins/buildPlugin";

export default defineConfig({
  plugins: [optimizer(getReplacer()), devPlugin(), vue()],
  build: {
    rollupOptions: {
      plugins: [buildPlugin()],
    },
  },
});
