import nav from '../common/nav';
import sidebar from '../common/sidebar';
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    base: '/web-resources/',
    title: 'web-resources',
    lang: 'zh-CN',
    description: '收录前端优质框架、库、工具、教程等资源',
    head: createHead(),
    ignoreDeadLinks: true,
    cleanUrls: 'disabled',
    lastUpdated: true,
    themeConfig: {
        // algolia检索-https://docsearch.algolia.com/
        algolia: {
            appId: 'MSTIXL0W57',
            apiKey: 'e8a3be224fd623da33f491fc96973486',
            indexName: 'web-resources'
        },
        repo: 'itmanyong/web-resources',
        docsRepo: 'itmanyong/web-resources',
        docsBranch: 'master/docs',
        editLinks: true,
        logo: '/logo.png',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright ©itmanyong 2022-present  web-resources',
        },
        lastUpdatedText: '最近更新时间',
        socialLinks: [{ icon: 'github', link: 'https://github.com/itmanyong/web-resources' }],
        editLink: {
            pattern: 'https://github.com/itmanyong/web-resources/edit/master/docs/:path',
            text: '为此页提供修改建议',
        },
        nav: nav,
        sidebar: sidebar,
        outlineTitle: '本页面',
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
    },
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

module.exports = config;
