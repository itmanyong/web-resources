---
title: 样式处理
---

# 样式处理

::: tip [我要推荐](https://github.com/itmanyong/web-resources/edit/master/docs/platform/fc/ecology/style.md)

-   CSS 预处理器解决了开发者的痛点，提升了开发体验~
-   原子化无视了作用域污染、走出了不同寻常的道路，但对开发者的要求提高了~

:::

## Less <ProjectBadge starts='less/less.js' version='less' />

历史悠久的`CSS超集`，赋予 CSS 于`编程逻辑`特性，让 CSS 也能动起来，本身`完全兼容CSS`语法，并提供包括 `嵌套` `混入` `函数` `命名空间` `作用域映射`在内的诸多特性，获得众多开发者的喜爱

-   `官方文档` [英文](https://lesscss.org/) | [中文](https://less.bootcss.com/)
-   `公网仓库` [Github](https://github.com/less/less.js) | [Npm](https://www.npmjs.com/package/less)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>Browser</th>
            <th>Node</th>
            <th>各类前端框架</th>
            <th>小程序</th>
            <th>其他支持CSS的环境</th>
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
        </tr>
    </tbody>
</table>

## Sass <ProjectBadge starts='sass/sass' version='sass' />

历经`13年`之久的维护更新，`Sass`一直走在`CSS扩展`库的前列，相比`Less`具有更多更强大的高级特性，`指令` `混合` `函数` `继承`等功能一应俱全，虽然已经有了 Less，但不妨试试更强大的 Sass

-   `官方文档` [英文](http://en.sass.hk/) | [中文](https://www.sass.hk/)
-   `公网仓库` [Github](https://github.com/sass/sass) | [生态仓库 Github](https://github.com/sass) | [Npm](https://www.npmjs.com/package/sass)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>Browser</th>
            <th>Node</th>
            <th>各类前端框架</th>
            <th>小程序</th>
            <th>其他支持CSS的环境</th>
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
        </tr>
    </tbody>
</table>

## Stylus <ProjectBadge starts='stylus/stylus' version='stylus' />

已创立`10+`年的富于`表现力` `动态的` `健壮的`CSS 扩展库，本身`非常激进`，含有诸多先进的特性，但好在这些特性都是可与标准 CSS 语法混合使用的，喜欢高级特性的开发者对它应该很感兴趣

-   `官方文档` [英文](https://stylus-lang.com/) | [中文](https://www.stylus-lang.cn/)
-   `公网仓库` [Github](https://github.com/stylus/stylus/) | [生态仓库 Github](https://github.com/stylus) | [Npm](https://www.npmjs.com/package/stylus)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>Browser</th>
            <th>Node</th>
            <th>各类前端框架</th>
            <th>小程序</th>
            <th>其他支持CSS的环境</th>
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
        </tr>
    </tbody>
</table>

## Postcss <ProjectBadge starts='postcss/postcss' version='postcss' />

一个用`JavaScript`来转换`CSS`的工具库，能够有效避免大部分错误，帮助开发者`自动添加CSS前缀`以优化浏览器适配

-   `官方文档` [英文](https://postcss.org/) | [中文](https://www.postcss.com.cn/)
-   `公网仓库` [Github](https://github.com/postcss/postcss) | [生态仓库 Github](https://github.com/postcss) | [Npm](https://www.npmjs.com/package/postcss)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>Browser</th>
            <th>Node</th>
            <th>各类前端框架</th>
            <th>小程序</th>
            <th>其他支持CSS的环境</th>
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
        </tr>
    </tbody>
</table>

## Unocss <ProjectBadge starts='unocss/unocss' version='postcss' />

`肝帝大佬` `Antfu`出品的`即时按需加载`的`无预设`纯`原子CSS引擎`，官方与社区含多种预设不愁找不到合适的，本身规则也足够使用，`高度定制` `归因模式` `变体/组合` `编译&运行时`等特性让人爱不释手

-   `官方文档` [英文](https://uno.antfu.me/)
-   `公网仓库` [Github](https://github.com/unocss/unocss) | [生态仓库 Github](https://github.com/unocss) | [Npm](https://www.npmjs.com/package/unocss)
-   `体验示例` [交互式示例](https://uno.antfu.me/play/)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vite</th>
            <th>Webpack</th>
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

## WindiCss <ProjectBadge starts='windicss/windicss' version='windicss' />

`强劲的`下一代实用型`原子化`CSS 库，`值自动推导` `可变修饰` `响应权重` `组合变换` `指令分析`等特性应有尽有，其对行业内热门框架工具都提供了集成方案和教程，是不可多得的优秀`原子化`CSS 工具

-   `官方文档` [英文](https://windicss.org/) | [中文](https://cn.windicss.org/)
-   `公网仓库` [Github](https://github.com/windicss/windicss) | [生态仓库 Github](https://github.com/windicss) | [Npm](https://www.npmjs.com/package/windicss)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>Vite</th>
            <th>Webpack</th>
            <th>Rollup</th>
            <th>Nuxt</th>
            <th>Svelte</th>
            <th>Vue Cli</th>
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
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>

## TailwindCss <ProjectBadge starts='tailwindlabs/tailwindcss' version='tailwindcss' />

`历史悠久` `开箱即用`的老牌`原子化`CSS 库，支持与`预处理器`配合使用，本身按照 CSS 分类提供超多实用的 CSS 功能类，`函数` `指令` `响应式`等特性都具备，本身还形成了`组件库`的模式

-   `官方文档` [英文](https://tailwindcss.com/) | [中文](https://www.tailwindcss.cn/)
-   `公网仓库` [Github](https://github.com/tailwindlabs/tailwindcss) | [生态仓库 Github](https://github.com/tailwindlabs) | [Npm](https://www.npmjs.com/package/tailwindcss)
-   `支持度&兼容性`
<table class='mini_table'>
    <thead>
        <tr>
            <th>Vanilla</th>
            <th>Vite</th>
            <th>Webpack</th>
            <th>CDN</th>
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
            <th>✔️</th>
            <th>✔️</th>
        </tr>
    </tbody>
</table>
