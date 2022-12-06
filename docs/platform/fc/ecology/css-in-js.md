---
title: CSS-in-JS
---

# CSS-in-JS

::: tip 说明

-   独立于`样式处理`的主要原因在于其广泛的生态，并不隶属于 CSS 特征，更像是新的篇章
-   css-in-js 赋予 CSS 动态化的能力，将其编程化了获得了更多的可能,但对开发规范提出了更高的要求~

:::

## Styled Components <ProjectBadge starts='styled-components/styled-components' version='styled-components' />

社区极为流行的 CC-in-JS 库，将样式定义为组件，以组件的概念定义样式，`自动前缀` `主题配置` `样式融合`等功能也是应有尽有

-   `官方文档` [英文](https://styled-components.com/)
-   `公网仓库` [Github](https://github.com/styled-components/styled-components) | [Npm](https://www.npmjs.com/package/styled-components)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>SSR</th>
            <th>React</th>
            <th>React-Native</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Emotion <ProjectBadge starts='emotion-js/emotion' version='@emotion/css' />

专为`JavaScript`编写的号称下一代 CC-in-JS 库，社区较为流行，`无视框架`默认支持`序列化嵌套` `对象嵌套`，并在生产环境中通过`样式缓存`技术优化运行时性能，本身也提供了热门框架的捆绑包，值得一试

-   `官方文档` [英文](https://styled-components.com/)
-   `公网仓库` [Github](https://github.com/emotion-js/emotion) | [Npm](https://www.npmjs.com/package/@emotion/css)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>React</th>
            <th>其他(理论)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## Linaria <ProjectBadge starts='callstack/linaria' version='linaria' />

号称`零运行时`的`编译型`CC-in-JS库，构建期间生产真实的css文件，本身`无视框架`，并将变量部分`css变量化`来实现动态化，提供一些功能包[`原子化`](https://www.npmjs.com/package/@linaria/atomic) [`React捆绑包`](https://www.npmjs.com/package/@linaria/react)

-   `官方文档` [英文](linaria)
-   `公网仓库` [Github](https://github.com/callstack/linaria) | [Npm](https://www.npmjs.com/package/linaria)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>React</th>
            <th>其他(理论全支持)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>❓</th>
        </tr>
    </tbody>
</table>


## Goober <ProjectBadge starts='cristianbote/goober' version='goober' />

小于`1KB`的 css-in-js 解决方案，极小的的包体积下支持超多的功能特性`无视框架` `动态优化` `as特性` `动态惰性` `自动前缀`等特性一应俱全，是一个非常不错的库

-   `官方文档` [英文](https://goober.rocks/)
-   `公网仓库` [Github](https://github.com/cristianbote/goober) | [Npm](https://www.npmjs.com/package/goober)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>SSR</th>
            <th>各类前端框架</th>
            <th>小程序</th>
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

## Fower <ProjectBadge starts='forsigner/fower' version='@fower/core' />

`设计新颖`的 cc-in-js 库，通过提供`可控组件`来支持`Atomic Props`的方式编写`原子CSS`，给予开发者极大的自主权`无视框架` `原子化CSSinJS` `CSS组件化(Props)` `自动作用域隔离`。由于其`Atomic Props`的设计方式，理论上支持任何`组件化`场景

-   `官方文档` [英文](https://fower.vercel.app/) | [中文](https://fower.vercel.app/zh-cn/)
-   `公网仓库` [Github](https://github.com/forsigner/fower) | [Npm](https://www.npmjs.com/package/@fower/core)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>React</th>
            <th>Vue</th>
            <th>Svelte</th>
            <th>Taro</th>
            <th>React-Native</th>
            <th>Uni-app</th>
            <th>Remax</th>
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
            <th>❓</th>
        </tr>
    </tbody>
</table>

> 上述列出框架官方均已提供对应捆绑包~

## Styled-jsx <ProjectBadge starts='vercel/styled-jsx' version='styled-jsx' />

与`JSX`强势捆绑的组件化 cc-in-js 方案，提供组件将样式定义为组件内容(Children)，且支持`CSS预处理器各种功能`，由于其定义为组件，天然具有`作用域隔离` `自动前缀` `动态注入` `响应式`等特性，配合 jsx 挥霍的不错的开发体验。

-   `官方文档` [英文](https://github.com/vercel/styled-jsx)
-   `公网仓库` [Github](https://github.com/vercel/styled-jsx) | [Npm](https://www.npmjs.com/package/styled-jsx)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>SSR</th>
            <th>React</th>
            <th>任何JSX环境(理论上)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## dash-ui styles <ProjectBadge starts='dash-ui/styles' version='@dash-ui/styles' />

一个`小巧` `强大` `无关框架`的 CSS-in-JS 库，默认提供热门框架集成，支持`CSS嵌套` `以CSS变量为主`，本身提供以`功能`为主的常用样式包，本身创建的样式支持`函数式`调用生成，通过`传参`实现动态化，学习成本几乎为 0

-   `官方文档` [英文](https://dash-ui.vercel.app/)
-   `公网仓库` [Github](https://github.com/dash-ui/styles) | [Npm](https://www.npmjs.com/package/@dash-ui/styles)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>SSR</th>
            <th>React</th>
            <th>Vue</th>
            <th>Preact</th>
            <th>Svelte</th>
            <th>其他(理论支持)</th>
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
            <th>❓</th>
        </tr>
    </tbody>
</table>

## Stitches <ProjectBadge starts='stitchesjs/stitches' version='@stitches/core' />

具有接`近零运行时` `SSR` `多变体`支持和一流开发人员体验的 CSS-in-JS 库，本身设计`与框架无关`，官方提供针对`React`的捆绑包[`@stitches/react`](https://www.npmjs.com/package/@stitches/react)，支持诸如`css prop` `prop` `utils` `smart tokens`多种功能

-   `官方文档` [英文](https://stitches.dev/)
-   `公网仓库` [Github](https://github.com/stitchesjs/stitches) | [Npm](https://www.npmjs.com/package/@stitches/core)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>React</th>
            <th>其他(理论全支持)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>✔️</th>
            <th>❓</th>
        </tr>
    </tbody>
</table>
