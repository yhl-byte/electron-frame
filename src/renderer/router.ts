/*
 * @Author       : yuhailong
 * @Date         : 2023-07-18 11:01:54
 * @LastEditors  : yuhailong
 * @LastEditTime : 2023-11-20 17:46:43
 * @FilePath     : /src/renderer/router.ts
 * @Description  :
 * Copyright 2023 yanzhong, All Rights Reserved.
 * 2023-07-18 11:01:54
 */
import * as VueRouter from "vue-router";
//路由规则描述数组
const routes = [{ path: "/" }];
//导出路由对象
export let router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
