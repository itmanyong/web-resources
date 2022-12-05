---
title: 网络处理
---

# 网络处理

::: tip 说明

-   与服务器进行交互的桥梁，构建项目的必要技术

:::

## Axios <ProjectBadge starts='axios/axios' version='axios' />

`前端必备` `不知道它给自己扣10分`，没必要介绍，`可以无脑上的库`，基于`Promise`的网络请求库

-   `官方文档` [英文](https://www.axios-http.cn/en/) | [中文](https://www.axios-http.cn/)
-   `公网仓库` [Github](https://github.com/axios/axios) | [Npm](https://www.npmjs.com/package/axios)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Browser</th>
            <th>Node</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## TanStack Query <ProjectBadge starts='tanstack/query' version='@tanstack/query-core' />

强大的`异步状态`管理工具，`无视框架` `缓存并行` `聚焦离线` `过滤轮训` `依赖查询/SSR`等能力一应俱全，是不可多得优质请求工具，同时还配备了`界面化`的`数据查看工具`，再也不需要为请求相关的内容申明各种诸如 `loading` `数据Data` `条件filter`此类的变量

-   `官方文档` [英文](https://tanstack.com/query)
-   `公网仓库` [Github](https://github.com/tanstack/query) | [Npm](https://www.npmjs.com/package/@tanstack/query-core)
-   `体验示例` [官方示例](https://tanstack.com/query/v4/docs/examples/react/simple)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>React</th>
            <th>Vue</th>
            <th>Solid</th>
            <th>Svelte</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

> React、Vue、Solid 插件已出,其他框架的适配还在进行中~

## Undici <ProjectBadge starts='nodejs/undici' version='undici' />

专为`Node.js`编写的网络库，支持诸如`委托代理` `模拟` `生命周期`等特性,本身还封装了除常规请求外的例如 `文件stream` `popeline连接` 等一系列方法

-   `官方文档` [英文](https://undici.nodejs.org/#/)
-   `公网仓库` [Github](https://github.com/nodejs/undici) | [Npm](https://www.npmjs.com/package/undici)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Node</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Dio <ProjectBadge starts='flutterchina/dio' />

支持`Flutter`的`Dart Http`请求库，支持 `Restful API` `FormData` `拦截取消` `Cookie管理` `文件/超时` `下载上传`等一系列常用功能

-   `官方文档` [英文](https://github.com/flutterchina/dio) | [中文](https://github.com/flutterchina/dio/blob/flutter/README-ZH.md)
-   `公网仓库` [Github](https://github.com/flutterchina/dio)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Flutter</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Luch request <ProjectBadge starts='flutterchina/dio' version='luch-request' />

类似于`axios`的基于`Uniapp` `Promise`而开发的请求库，针对 Uniapp 的`不同平台`做了优化，api 设计靠拢`axios`，学习成本基本没有，使用`Uniapp`的开发者不容错过

-   `官方文档` [中文](https://www.quanzhan.co/luch-request/)
-   `公网仓库` [Github](https://github.com/lei-mu/luch-request) | [Npm](https://www.npmjs.com/package/luch-request) | [Uniapp 插件地址](https://ext.dcloud.net.cn/plugin?id=392)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Uniapp全平台</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## ProQuest <ProjectBadge starts='xdoer/PreQuest' version='@prequest/core' />

`洋葱式`的 http 请求解决方案工具，本身只抹平不同环境平台下的差异，对外提供`统一`的接口和`输出`，开发者可`自定义`中间件进行各个平台的适配，是一个不错的开源项目。作者提供了部分集成 [`React Hook`](https://www.npmjs.com/package/@prequest/use-request) [`XHR`](https://www.npmjs.com/package/@prequest/xhr) [`Fetch`](https://www.npmjs.com/package/@prequest/fetch) [`Jsonp`](https://www.npmjs.com/package/@prequest/jsonp) [`Node`](https://www.npmjs.com/package/@prequest/node) [`小程序`](https://www.npmjs.com/package/@prequest/miniprogram),等其他配套工具，官网都有详尽说明

-   `官方文档` [中文](https://pre-quest.vercel.app/#/)
-   `公网仓库` [Github](https://github.com/xdoer/PreQuest) | [Npm](https://www.npmjs.com/package/@prequest/core)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>React</th>
            <th>Vue</th>
            <th>Uniapp</th>
            <th>Taro</th>
            <th>小程序</th>
            <th>Node</th>
            <th>其他</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>
