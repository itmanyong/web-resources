import nav from '../common/nav';
import sidebar from '../common/sidebar';
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/itmanyong/web-resources' }],
    themeConfig: {
        lastUpdatedText: '最近更新时间',
        outlineTitle: '本页面',
        // algolia检索-https://docsearch.algolia.com/
        algolia: {
            appId: 'MSTIXL0W57',
            apiKey: '61c1764abc43e548373e60269daed667',
            indexName: 'web-resources',
        },
        nav: nav,
        sidebar: sidebar,
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        editLink: {
            pattern: 'https://github.com/itmanyong/web-resources/edit/main/docs/:path',
            text: '为此页提供修改建议',
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

module.exports = config;
