---
title: 状态管理
---

# 状态管理

::: tip 说明

-   项目级别的响应状态共享能力，跨组件跨页面

:::

## Pinia <ProjectBadge starts='vuejs/pinia' version='pinia' />

以`组合式API`为主的`Vue`状态管理库，支持`option式`的语法，`极其轻量1KB`，使用 Vuex 的开发者是时候升级了~

-   `官方文档` [英文](https://pinia.vuejs.org/) | [中文](https://pinia.vuejs.org/zh/index.html)
-   `公网仓库` [Github](https://github.com/vuejs/pinia) | [Npm](https://www.npmjs.com/package/pinia)
-   `体验示例` [官方示例](https://stackblitz.com/github/piniajs/example-vue-3-vite)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vue</th>
            <th>Uniapp</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Vuex <ProjectBadge starts='vuejs/vuex' version='vuex' />

`Vue`官配的状态管理库，相信很多人爱不释手，但丝毫不影响推荐你使用新的替代品 `Pinia`

-   `官方文档` [英文](https://vuex.vuejs.org/) | [中文](https://vuex.vuejs.org/zh/)
-   `公网仓库` [Github](https://github.com/vuejs/vuex) | [Npm](https://www.npmjs.com/package/vuex)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vue</th>
            <th>Uniapp</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Redux <ProjectBadge starts='reduxjs/redux' version='redux' />

一个`强大` `历史悠久`的 JS 应用状态容器，提供完全可控可预测的状态管理模型，本身不受框架限制，有许多衍生品如 [`React-Redux`](https://react-redux.js.org/) [`Redux-Toolkit`](https://redux-toolkit.js.org/) [`Redux-Thunk`](https://github.com/reduxjs/redux-thunk/)等

-   `官方文档` [英文](https://redux.js.org/) | [中文](https://cn.redux.js.org/)
-   `公网仓库` [Github](https://github.com/reduxjs/redux) | [Npm](https://www.npmjs.com/package/redux)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>React</th>
            <th>Vue</th>
            <th>其他</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Mobx <ProjectBadge starts='mobxjs/mobx' version='mobx' />

一个`简单` `可扩展`的 JS 应用状态容器，提供基于 Proxy 的数据响应力，本身不受框架限制，有许多衍生品如 [`mobx-vue2`](https://github.com/mobxjs/mobx-vue) [`mobx-vue3`](https://github.com/mobxjs/mobx-vue-lite) [`mobx-React`](https://github.com/mobxjs/mobx-react)等

-   `官方文档` [英文](https://mobx.js.org/) | [中文](https://zh.mobx.js.org/)
-   `公网仓库` [Github](https://github.com/mobxjs/mobx) | [Npm](https://www.npmjs.com/package/mobx)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>React</th>
            <th>Vue</th>
            <th>其他</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Recoil <ProjectBadge starts='facebookexperimental/Recoil' version='recoil' />

`React`官方出品基于`Context`特性的 hook 状态库，发展的不温不火，不过上项目还是没问题

-   `官方文档` [英文](https://recoiljs.org/) | [中文](https://recoiljs.org/zh-hans/)
-   `公网仓库` [Github](https://github.com/facebookexperimental/Recoil) | [Npm](https://www.npmjs.com/package/recoil)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>React</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Concent <ProjectBadge starts='concentjs/concent' version='concent' />

`腾讯大佬`开源的为`React`量身定制的赋能库，本身不局限于状态管理这个点，而是将状态管理辐射到 React 全局，让组件也能享受状态的便利，同时提供了基于`Proxy`的特殊编码 API 和方式。作者维护积极，问题反馈及时，是一款为数不多的良品

-   `官方文档` [英文](https://concentjs.github.io/concent-doc/en/) | [中文](https://concentjs.github.io/concent-doc/)
-   `公网仓库` [Github](https://github.com/concentjs/concent) | [Npm](https://www.npmjs.com/package/concent)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>React</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Hox <ProjectBadge starts='umijs/hox' version='hox' />

`Umijs`开源的号称`下一代React状态管理`的注重多个组件共享状态的库，本身完全基于 React 的 API 进行开发，学习成本很低，不妨试一试

-   `官方文档` [英文](https://hox.js.org/) | [中文](https://hox.js.org/zh)
-   `公网仓库` [Github](https://github.com/umijs/hox) | [Npm](https://www.npmjs.com/package/hox)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>React</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
        </tr>
    </tbody>
</table>
