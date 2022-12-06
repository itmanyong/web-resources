---
title: 状态管理
---

# 状态管理

::: tip [我要推荐](https://github.com/itmanyong/web-resources/edit/master/docs/platform/fc/ecology/router.md)

-   项目级别的响应状态共享能力，跨组件跨页面

:::

## Legend State <ProjectBadge starts='LegendApp/legend-state' version='@legendapp/state' />

`超快` `超高性能` 的大型 JS 状态管理器，本身不局限于框架，官方提供`React`的集成,并使用技巧对 React 的组件做了极大的`性能优化`，大大降低了`React`开发者的心智负担，与其他框架的结合需要开发者自行摸索

-   `官方文档` [英文](https://legendapp.com/open-source/state/)
-   `公网仓库` [Github](https://github.com/LegendApp/legend-state) | [Npm](https://www.npmjs.com/package/@legendapp/state)
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

## Nano Stores <ProjectBadge starts='nanostores/nanostores' version='nanostores' />

`超小的` `超快速` `无头的`JS 状态容器，具有很好地 TS 支持，本身不局限于框架，但作者还是提供了针对特定框架的集成 [`vue-store`](https://github.com/nanostores/vue) [`Preact-store`](https://github.com/nanostores/preact) [`React-store`](https://github.com/nanostores/react) [`Solid-store`](https://github.com/nanostores/solid)

-   `公网仓库` [Github](https://github.com/nanostores/nanostores) | [生态仓库 Github](https://github.com/nanostores) | [Npm](https://www.npmjs.com/package/nanostores)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>React</th>
            <th>Preact</th>
            <th>Vue</th>
            <th>Solid</th>
            <th>Svelte</th>
            <th>React Native</th>
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
        </tr>
    </tbody>
</table>

## Xoid <ProjectBadge starts='onurkerimov/xoid' version='xoid' />

`可扩展` `与框架无关`的状态管理器，`简单性` `扩展性`是它的特点，本身基于`atoms`，推崇`原子化`状态，为`React`提供了集成和说明示例

-   `官方文档` [英文](https://xoid.dev/)
-   `公网仓库` [Github](https://github.com/onurkerimov/xoid) | [Npm](https://www.npmjs.com/package/xoid)
-   `体验示例` [官方示例](https://xoid.dev/docs/examples)
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
