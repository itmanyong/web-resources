---
title: 微前端
---

# 微前端

::: tip 说明

-   将不同版本、不同框架、不同架构的前端项目编排在一起形成巨型应用 | 统一规划
-   支持以不同版本、不同框架、不同技术进行项目开发、拆分、组合、共享的能力
-   抹平技术与框架的限制，最大限度重用不同模块/服务

:::

## Rallie <ProjectBadge starts='ralliejs/rallie' version='@rallie/block' />

`去中心化` `微服务`模式的前端项目架构库，与常规微前端框架不一样，rallie 没有基座应用/主应用，每一个服务即是一个项目，服务之间`通信、事件、公共状态`均支持，是一个很不错的选择

-   `官方文档` [中文](http://rallie.js.cool/)
-   `公网仓库` [Github](https://github.com/ralliejs/rallie) | [Npm](https://www.npmjs.com/package/@rallie/block)
-   `体验示例` [综合示例](https://ralliejs.github.io/rallie/index.html)

> 目前处于试验阶段~~还未正式发布

## MicroApp <ProjectBadge starts='micro-zoe/micro-app' version='@micro-zoe/micro-app' />

`京东零售`出品的一款轻量、高效、功能强大的无任何依赖的微前端框架，提供了 `JS沙箱` `样式隔离` `元素隔离` `数据通信` `插件` `预加载`等多种能力

-   `官方文档` [中文](https://micro-zoe.github.io/micro-app/) | [V1-中文](https://micro-zoe.com/docs/1.x/#/zh-cn/start)
-   `公网仓库` [Github](https://github.com/micro-zoe/micro-app) | [Npm](https://www.npmjs.com/package/@micro-zoe/micro-app)
-   `体验示例` [综合示例](https://zeroing.jd.com/micro-app/demo/react16)

## EMP <ProjectBadge starts='efoxTeam/emp' version='@efox/emp' />

基于下一代构建实现的支持`微前端` `微组件` `支持ESM`的共享模型微前端解决方案,`SWC重载` `集成JS/TS/SCSS/LESS` `多页应用/库` `插件系统` `共享Webpack配置`

-   `官方文档` [中文](https://emp2.netlify.app/)
-   `公网仓库` [Github](https://github.com/efoxTeam/emp) | [Npm](https://www.npmjs.com/package/@efox/emp)
-   `体验示例` [Antd Demo](https://github.com/efoxTeam/emp/tree/main/projects/antd-base) | [EMP Demo](https://github.com/efoxTeam/emp/tree/main/projects/demo) | [多入口 Demo](https://github.com/efoxTeam/emp/tree/main/projects/multi-entries-app) | [Vue Demo](https://github.com/efoxTeam/emp/tree/main/projects/vue-2-base)

## 无界 <ProjectBadge name='wujie' starts='Tencent/wujie' />

`腾讯`出品的支持`Vue/React`基于 `WebComponent` + `iframe沙箱`的极致的微前端框架,`预加载/执行` `去中心化` `样式隔离` `近原生性能` `字应用保活` `支持Vite`

-   `官方文档` [中文](https://wujie-micro.github.io/doc/)
-   `公网仓库` [Github](https://github.com/Tencent/wujie) | [Npm](https://www.npmjs.com/package/wujie)
-   `体验示例` [自定义地址](https://wujie-micro.github.io/doc/wujie/) | [Vue 主应用](https://wujie-micro.github.io/demo-main-vue/home) | [React 主应用](https://wujie-micro.github.io/demo-main-react/)
