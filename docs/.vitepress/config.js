/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    base: '/web-resources/',
    title: 'Web-resources',
    titleTemplate: 'WEB-RESOURCES',
    lang: 'zh-CN',
    description: '整理汇集前端开发者资源,包含 WEB H5 小程序 学习资料 等',
    head: createHead(),
    editLinks: true,
    logo: '/logo.png',
    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © itmanyong 2022-present  web-resources',
    },
    lastUpdated: true,
    lastUpdatedText: '最近更新时间',
    socialLinks: [{ icon: 'github', link: 'https://github.com/itmanyong/web-resources' }],
    editLink: {
        pattern: 'https://github.com/itmanyong/web-resources/edit/main/docs/:path',
        text: '为此页提供修改建议',
    },
    themeConfig: {
        // algolia检索-https://docsearch.algolia.com/
        algolia: {
            appId: 'MSTIXL0W57',
            apiKey: '61c1764abc43e548373e60269daed667',
            indexName: 'web-resources',
        },
        nav: createNavbar(),
        sidebar: createSidebar(createNavbar()),
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
    },
    ignoreDeadLinks: true,
    cleanUrls: 'without-subfolders',
};

// 创建head头部
function createHead() {
    return [
        ['meta', { name: 'author', content: 'itmanyong' }],
        [
            'meta',
            {
                name: 'keywords',
                content:
                    'React,react,Vue,vue,Vue3,vue3,js,javascript,uniapp,uni-app,小程序,weapp,h5,web,前端,前端开发,vite,resources',
            },
        ],
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
        ['link', { rel: 'stylesheet', type: 'image/svg+xml', href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3' }],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            },
        ],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        [
            'script',
            {
                src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3',
            },
        ],
    ];
}
// 创建顶部导航栏
function createNavbar() {
    return [
        {
            text: '总览',
            link: '/platform/all',
        },
        {
            text: '框架',
            items: [
                {
                    text: '单页面SPA',
                    link: '/platform/framework/spa',
                },
                {
                    text: '服务器渲染SSR',
                    link: '/platform/framework/ssr',
                },
                {
                    text: '小程序',
                    link: '/platform/framework/mp',
                },
                {
                    text: '移动端H5',
                    link: '/platform/framework/h5',
                },
                {
                    text: '桌面端PC',
                    link: '/platform/framework/pc',
                },
                {
                    text: '移动端APP',
                    link: '/platform/framework/app',
                },
                {
                    text: '其他框架',
                    link: '/platform/framework/other',
                },
            ],
        },
        {
            text: '组件库',
            items: [
                {
                    text: '全功能UI库',
                    link: '/platform/component/ui',
                },
                {
                    text: '独立功能组件',
                    link: '/platform/component/component',
                },
                {
                    text: '图表库',
                    link: '/platform/component/chart',
                },
                {
                    text: '图标集',
                    link: '/platform/component/icon',
                },
                {
                    text: '动画集',
                    link: '/platform/component/animation',
                },
                {
                    text: '地图集',
                    link: '/platform/component/map',
                },
                {
                    text: '富文本&markdown编辑器',
                    link: '/platform/component/editor',
                },
                {
                    text: '纯样式库',
                    link: '/platform/component/style',
                },
            ],
        },
        {
            text: '生态&成品',
            items: [
                {
                    text: '路由',
                    link: '/platform/ecology/router',
                },
                {
                    text: '状态管理',
                    link: '/platform/ecology/model',
                },
                {
                    text: '网络请求',
                    link: '/platform/ecology/request',
                },
                {
                    text: '样式处理',
                    link: '/platform/ecology/style',
                },
                {
                    text: '函数功能库',
                    link: '/platform/ecology/function',
                },
                {
                    text: '开箱即用平台',
                    link: '/platform/ecology/platform',
                },
            ],
        },
        {
            text: '工具&插件',
            items: [
                {
                    text: '开发工具',
                    link: '/platform/tool/dev',
                },
                {
                    text: '在线快捷工具',
                    link: '/platform/tool/online',
                },
                {
                    text: '代码生成器',
                    link: '/platform/tool/generator',
                },
                {
                    text: 'VITE优质插件',
                    link: '/platform/tool/vite',
                },
                {
                    text: 'WEBPACK优质插件',
                    link: '/platform/tool/webpack',
                },
                {
                    text: 'VSCODE优质插件',
                    link: '/platform/tool/vscode',
                },
                {
                    text: '浏览器插件',
                    link: '/platform/tool/browser',
                },
            ],
        },
        {
            text: '文档&三方库',
            items: [
                {
                    text: '官方文档',
                    link: '/platform/doc/official',
                },
                {
                    text: 'UI库文档',
                    link: '/platform/doc/ui',
                },
                {
                    text: '组件库文档',
                    link: '/platform/doc/component',
                },
                {
                    text: '小程序文档',
                    link: '/platform/doc/mp',
                },
            ],
        },
        {
            text: '学习&面试',
            items: [
                {
                    text: '学习资料',
                    link: '/platform/learn/learn',
                },
                {
                    text: '进阶宝典',
                    link: '/platform/learn/advanced',
                },
                {
                    text: '面试航母攻略',
                    link: '/platform/learn/interview',
                },
                {
                    text: '算法天地',
                    link: '/platform/learn/algorithm',
                },
            ],
        },
        {
            text: '收藏&社区',
            items: [
                {
                    text: '在线小工具',
                    link: '/platform/collect/tool',
                },
                {
                    text: '查询必备',
                    link: '/platform/collect/query',
                },
            ],
        },
    ];
}
// 创建侧边导航栏
function createSidebar(nav) {
    const sidebar = {
        '/platform/': [
            {
                text: '总览',
                items: [
                    {
                        text: '介绍',
                        link: '/platform/all',
                    },
                ],
            },
            ...nav.filter(item => item.link != '/platform/all').map(item => ({ ...item, collapsible: true, collapsed: true })),
        ],
    };

    return sidebar;
}

module.exports = config;
