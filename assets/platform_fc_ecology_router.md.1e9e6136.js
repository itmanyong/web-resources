import{_ as c,c as h,b as t,d as e,e as o,a as r,o as n,r as i}from"./app.2c294832.js";const q=JSON.parse('{"title":"\u8DEF\u7531\u5668","description":"","frontmatter":{"title":"\u8DEF\u7531\u5668"},"headers":[{"level":2,"title":"TanStack Router","slug":"tanstack-router","link":"#tanstack-router","children":[]},{"level":2,"title":"React Router","slug":"react-router","link":"#react-router","children":[]},{"level":2,"title":"Vue Router","slug":"vue-router","link":"#vue-router","children":[]},{"level":2,"title":"Chicane","slug":"chicane","link":"#chicane","children":[]},{"level":2,"title":"Nano Stores","slug":"nano-stores","link":"#nano-stores","children":[]},{"level":2,"title":"Sapper","slug":"sapper","link":"#sapper","children":[]},{"level":2,"title":"React Navigation","slug":"react-navigation","link":"#react-navigation","children":[]}],"relativePath":"platform/fc/ecology/router.md","lastUpdated":1670493653000}'),l={name:"platform/fc/ecology/router.md"},s=r('<h1 id="\u8DEF\u7531\u5668" tabindex="-1">\u8DEF\u7531\u5668 <a class="header-anchor" href="#\u8DEF\u7531\u5668" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title"><a href="https://github.com/itmanyong/web-resources/edit/master/docs/platform/fc/ecology/router.md" target="_blank" rel="noreferrer">\u6211\u8981\u63A8\u8350</a></p><ul><li>\u7EAF\u524D\u7AEF\u63A7\u5236\u7684\u7EC6\u81F4\u5230\u6A21\u5757\u7684\u9875\u9762\u5339\u914D\u7EC4\u88C5\u80FD\u529B</li><li>\u524D\u540E\u7AEF\u5206\u79BB\u91CD\u8981\u7684\u6280\u672F\u521B\u65B0\u70B9\uFF0C\u5B8C\u5168\u6446\u8131\u670D\u52A1\u7AEF\u8DEF\u7531\u7684\u63A7\u5236</li></ul></div>',2),d={id:"tanstack-router",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#tanstack-router","aria-hidden":"true"},"#",-1),u=r('<p>\u9002\u7528\u4E8E<code>\u73B0\u4EE3\u5316</code>\u5E94\u7528\u7A0B\u5E8F\u7684<code>\u9AD8\u6269\u5C55</code>\u65E0\u5934\u8DEF\u7531\u5668\uFF0C\u4E0D\u53D7\u6846\u67B6\u9650\u5236\uFF0C<code>\u7F13\u5B58\u91CD\u7EC4</code> <code>\u5F02\u6B65\u62C6\u5206</code> <code>\u7ED3\u6784\u5171\u4EAB</code> <code>\u8FC7\u6EE4\u62E6\u622A</code>\u7B49\u529F\u80FD\u5E94\u6709\u5C3D\u6709\uFF0C\u4E0D\u53EF\u8C13\u4E0D\u5F3A\u5927</p><ul><li><code>\u5B98\u65B9\u6587\u6863</code> <a href="https://tanstack.com/router" target="_blank" rel="noreferrer">\u82F1\u6587</a></li><li><code>\u516C\u7F51\u4ED3\u5E93</code> <a href="https://github.com/tanstack/router" target="_blank" rel="noreferrer">Github</a> | <a href="https://www.npmjs.com/package/@tanstack/router-core" target="_blank" rel="noreferrer">Npm</a></li><li><code>\u4F53\u9A8C\u793A\u4F8B</code> <a href="https://tanstack.com/router/v1/docs/examples/react/basic?file=src%2Fmain.tsx" target="_blank" rel="noreferrer">\u5B98\u65B9\u793A\u4F8B</a></li><li><code>\u652F\u6301\u5EA6&amp;\u517C\u5BB9\u6027</code></li></ul><table class="mini_table"><thead><tr><th>Vanilla</th><th>React</th><th>Vue</th><th>Preact</th><th>Solid</th><th>Svelte</th></tr></thead><tbody><tr><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th></tr></tbody></table><blockquote><p>React \u662F\u4E00\u7EA7\u516C\u6C11,\u5176\u4ED6\u6846\u67B6\u7684\u652F\u6301\u3001\u6587\u6863\u548C\u793A\u4F8B\u6B63\u5728\u7F16\u5199\u4E2D~</p></blockquote>',4),p={id:"react-router",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#react-router","aria-hidden":"true"},"#",-1),g=r('<p><code>React</code>\u5B98\u914D\u8DEF\u7531\u5668\uFF0C\u6D89\u53CA React \u7684<code>\u5F00\u53D1\u8005\u5FC5\u5907</code>\uFF0C\u56FA\u5B9A\u751F\u6001\u4EA7\u54C1\u4E4B\u4E00\uFF0C\u5F53\u4F60\u4E0D\u77E5\u9053\u9009\u62E9\u4EC0\u4E48\u7684\u65F6\u5019\u9009\u62E9\u5B83\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898</p><ul><li><code>\u5B98\u65B9\u6587\u6863</code> <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">\u82F1\u6587</a> | <a href="https://v5.reactrouter.com/" target="_blank" rel="noreferrer">v5-\u82F1\u6587</a></li><li><code>\u516C\u7F51\u4ED3\u5E93</code> <a href="https://github.com/remix-run/react-router" target="_blank" rel="noreferrer">Github</a> | <a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="noreferrer">Npm</a></li><li><code>\u4F53\u9A8C\u793A\u4F8B</code> <a href="https://github.com/remix-run/react-router/tree/dev/examples" target="_blank" rel="noreferrer">\u5B98\u65B9\u793A\u4F8B</a></li><li><code>\u652F\u6301\u5EA6&amp;\u517C\u5BB9\u6027</code></li></ul><table class="mini_table"><thead><tr><th>React</th><th>React-SSR</th><th>React Native</th></tr></thead><tbody><tr><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th></tr></tbody></table>',3),f={id:"vue-router",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#vue-router","aria-hidden":"true"},"#",-1),k=r('<p><code>Vue</code>\u5B98\u914D\u8DEF\u7531\u5668\uFF0C\u6D89\u53CA Vue \u7684<code>\u5F00\u53D1\u8005\u5FC5\u5907</code>\uFF0C\u56FA\u5B9A\u751F\u6001\u4EA7\u54C1\u4E4B\u4E00\uFF0C\u5F53\u4F60\u4E0D\u77E5\u9053\u9009\u62E9\u4EC0\u4E48\u7684\u65F6\u5019\u9009\u62E9\u5B83\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898</p><ul><li><code>\u5B98\u65B9\u6587\u6863</code> <a href="https://router.vuejs.org/" target="_blank" rel="noreferrer">\u82F1\u6587</a> | <a href="https://router.vuejs.org/zh/" target="_blank" rel="noreferrer">\u4E2D\u6587</a></li><li><code>\u516C\u7F51\u4ED3\u5E93</code> <a href="https://github.com/vuejs/router" target="_blank" rel="noreferrer">Github</a> | <a href="https://www.npmjs.com/package/vue-router" target="_blank" rel="noreferrer">Npm</a></li><li><code>\u652F\u6301\u5EA6&amp;\u517C\u5BB9\u6027</code></li></ul><table class="mini_table"><thead><tr><th>Vue</th></tr></thead><tbody><tr><th>\u2714\uFE0F</th></tr></tbody></table>',3),v={id:"chicane",tabindex:"-1"},T=t("a",{class:"header-anchor",href:"#chicane","aria-hidden":"true"},"#",-1),S=r('<p>\u8F7B\u91CF\u7684\u7528\u4E8E<code>React</code>\u7684\u7C7B\u578B\u5B89\u5168\u53C8\u7B80\u5355\u7684\u8DEF\u7531\u5668\uFF0C\u4F18\u5316\u4E86\u8DEF\u7531\u7EA7\u522B\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\uFF0C\u503C\u7684\u5C1D\u8BD5</p><ul><li><code>\u5B98\u65B9\u6587\u6863</code> <a href="https://swan-io.github.io/chicane/" target="_blank" rel="noreferrer">\u82F1\u6587</a></li><li><code>\u516C\u7F51\u4ED3\u5E93</code> <a href="https://github.com/swan-io/chicane" target="_blank" rel="noreferrer">Github</a> | <a href="https://www.npmjs.com/package/@swan-io/chicane" target="_blank" rel="noreferrer">Npm</a></li><li><code>\u4F53\u9A8C\u793A\u4F8B</code> <a href="https://github.com/swan-io/chicane/tree/main/example" target="_blank" rel="noreferrer">\u5B98\u65B9\u793A\u4F8B</a></li><li><code>\u652F\u6301\u5EA6&amp;\u517C\u5BB9\u6027</code></li></ul><table class="mini_table"><thead><tr><th>React</th></tr></thead><tbody><tr><th>\u2714\uFE0F</th></tr></tbody></table>',3),R={id:"nano-stores",tabindex:"-1"},w=t("a",{class:"header-anchor",href:"#nano-stores","aria-hidden":"true"},"#",-1),V=r('<p><code>\u8D85\u5C0F\u7684</code> <code>\u5168\u517C\u5BB9</code> \u7684\u65E0\u5934\u5FAE\u578B URL \u8DEF\u7531\u5668\uFF0C\u5177\u6709\u5F88\u597D\u5730 TS \u652F\u6301\uFF0C\u867D\u7136\u5F88\u5C0F\u4F17\uFF0C\u4F46\u662F\u503C\u5F97\u501F\u9274\u5B66\u4E60</p><ul><li><code>\u516C\u7F51\u4ED3\u5E93</code> <a href="https://github.com/nanostores/router" target="_blank" rel="noreferrer">Github</a> | <a href="https://www.npmjs.com/package/@nanostores/router" target="_blank" rel="noreferrer">Npm</a></li><li><code>\u652F\u6301\u5EA6&amp;\u517C\u5BB9\u6027</code></li></ul><table class="mini_table"><thead><tr><th>Vanilla</th><th>React</th><th>Vue</th><th>Svelte</th></tr></thead><tbody><tr><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th></tr></tbody></table>',3),N={id:"sapper",tabindex:"-1"},A=t("a",{class:"header-anchor",href:"#sapper","aria-hidden":"true"},"#",-1),x=r('<p><code>\u57FA\u4E8ESvelte</code> <code>SEO\u53CB\u597D</code> <code>\u65E0VDOM</code> <code>\u652F\u6301SSR</code> <code>\u9879\u76EE\u6A21\u677F</code> <code>\u66F4\u597D\u7684\u6027\u80FD</code> <code>\u66F4\u5FEB\u7684\u901F\u5EA6</code></p><ul><li><code>\u5B98\u65B9\u6587\u6863</code> <a href="https://sapper.svelte.dev/" target="_blank" rel="noreferrer">\u82F1\u6587</a> | <a href="https://www.sapperjs.com/" target="_blank" rel="noreferrer">\u4E2D\u6587</a></li><li><code>\u516C\u7F51\u4ED3\u5E93</code> <a href="https://github.com/sveltejs/sapper" target="_blank" rel="noreferrer">Github</a> | <a href="https://www.npmjs.com/package/sapper" target="_blank" rel="noreferrer">Npm</a></li><li><code>\u652F\u6301\u5EA6&amp;\u517C\u5BB9\u6027</code></li></ul><table class="mini_table"><thead><tr><th>Svelte</th><th>SSR</th></tr></thead><tbody><tr><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th></tr></tbody></table>',3),P={id:"react-navigation",tabindex:"-1"},C=t("a",{class:"header-anchor",href:"#react-navigation","aria-hidden":"true"},"#",-1),y=r('<p><code>React Native\u4E13\u5C5E</code> <code>\u5F00\u7BB1\u5373\u7528</code> <code>iOS&amp;\u5B89\u5353\u5B9A\u5236\u52A8\u753B</code> <code>\u5B8C\u5168\u53EF\u5B9A\u5236</code> <code>\u5B8C\u6574\u6587\u6863</code> <code>\u72B6\u6001\u6301\u4E45\u5316</code> <code>Redux/Mobx\u6DF1\u5EA6\u96C6\u6210</code> <code>\u914D\u5957\u5F00\u53D1\u5DE5\u5177</code> <code>\u6302\u94A9\u9F50\u5168</code></p><ul><li><code>\u5B98\u65B9\u6587\u6863</code> <a href="https://reactnavigation.org/" target="_blank" rel="noreferrer">\u82F1\u6587</a> | <a href="https://www.reactnavigation.org.cn/" target="_blank" rel="noreferrer">\u4E2D\u6587</a> | <a href="https://reactnavigation.org/docs/5.x/getting-started" target="_blank" rel="noreferrer">V5-\u82F1\u6587</a></li><li><code>\u516C\u7F51\u4ED3\u5E93</code> <a href="https://github.com/react-navigation/react-navigation" target="_blank" rel="noreferrer">Github</a> | <a href="https://www.npmjs.com/package/@react-navigation/native" target="_blank" rel="noreferrer">Npm</a> | <a href="https://github.com/react-navigation" target="_blank" rel="noreferrer">\u751F\u6001\u4ED3\u5E93 Github</a></li><li><code>\u652F\u6301\u5EA6&amp;\u517C\u5BB9\u6027</code></li></ul><table class="mini_table"><thead><tr><th>Svelte</th><th>SSR</th></tr></thead><tbody><tr><th>\u2714\uFE0F</th><th>\u2714\uFE0F</th></tr></tbody></table>',3);function j(I,D,E,G,B,O){const a=i("ProjectBadge");return n(),h("div",null,[s,t("h2",d,[e("TanStack Router "),o(a,{starts:"tanstack/router",version:"@tanstack/router-core"}),e(),_]),u,t("h2",p,[e("React Router "),o(a,{starts:"remix-run/react-router",version:"react-router-dom"}),e(),b]),g,t("h2",f,[e("Vue Router "),o(a,{starts:"vuejs/router",version:"vue-router"}),e(),m]),k,t("h2",v,[e("Chicane "),o(a,{starts:"swan-io/chicane",version:"@swan-io/chicane"}),e(),T]),S,t("h2",R,[e("Nano Stores "),o(a,{starts:"nanostores/router",version:"@nanostores/router"}),e(),w]),V,t("h2",N,[e("Sapper "),o(a,{starts:"sveltejs/sapper",version:"sapper"}),e(),A]),x,t("h2",P,[e("React Navigation "),o(a,{starts:"sveltejs/sapper",version:"@react-navigation/native"}),e(),C]),y])}const M=c(l,[["render",j]]);export{q as __pageData,M as default};
