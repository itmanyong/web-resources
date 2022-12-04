const sidebar = {
    // 框架&库
    '/platform/fc': [
        {
            text: '框架',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    text: '基础框架',
                    link: '/platform/fc/framework/spa',
                },
                {
                    text: '服务器渲染',
                    link: '/platform/fc/framework/ssr',
                },
                {
                    text: '跨端&小程序',
                    link: '/platform/fc/framework/mp',
                },
                {
                    text: 'PC桌面端',
                    link: '/platform/fc/framework/pc',
                },
                {
                    text: 'APP移动端',
                    link: '/platform/fc/framework/app',
                },
                {
                    text: '服务器端',
                    link: '/platform/fc/framework/server',
                },
                {
                    text: '微前端',
                    link: '/platform/fc/framework/micro-frontend',
                },
                {
                    text: '其他框架',
                    link: '/platform/fc/framework/other',
                },
            ],
        },
        {
            text: '生态库',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    text: '路由库',
                    link: '/platform/fc/ecology/router',
                },
                {
                    text: '状态管理',
                    link: '/platform/fc/ecology/model',
                },
                {
                    text: '网络请求',
                    link: '/platform/fc/ecology/request',
                },
                {
                    text: '样式处理',
                    link: '/platform/fc/ecology/style',
                },
                {
                    text: '开箱即用Admin',
                    link: '/platform/fc/ecology/admin',
                },
            ],
        },
        {
            text: '组件库',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    text: 'UI库',
                    link: '/platform/fc/component/ui',
                },
                {
                    text: '图表集',
                    link: '/platform/fc/component/chart',
                },
                {
                    text: '图标集',
                    link: '/platform/fc/component/icon',
                },
                {
                    text: '动画集',
                    link: '/platform/fc/component/animation',
                },
                {
                    text: '地图集',
                    link: '/platform/fc/component/map',
                },
                {
                    text: '富文本',
                    link: '/platform/fc/component/editor',
                },
                {
                    text: 'markdown',
                    link: '/platform/fc/component/markdown',
                },
                {
                    text: '纯样式库',
                    link: '/platform/fc/component/style',
                },
            ],
        },
        {
            text: '工具库',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    text: '函数库',
                    link: '/platform/fc/tool/function',
                },
            ],
        },
    ],
    // 工具&插件
    '/platform/tp': [
        {
            text: '工具',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    text: '编辑器&IDE',
                    link: '/platform/tp/tool/dev',
                },
                {
                    text: '代码生成器',
                    link: '/platform/tp/tool/generator',
                },
                {
                    text: '在线快捷工具',
                    link: '/platform/tp/tool/online',
                },
            ],
        },
        {
            text: '插件',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    text: 'VITE插件',
                    link: '/platform/tp/plugin/vite',
                },
                {
                    text: 'WEBPACK插件',
                    link: '/platform/tp/plugin/webpack',
                },
                {
                    text: 'VSCODE插件',
                    link: '/platform/tp/plugin/vscode',
                },
                {
                    text: '浏览器插件',
                    link: '/platform/tp/plugin/browser',
                },
            ],
        },
    ],
    // 文档&学习
    '/platform/doc': [
        {
            text: '博客&社区',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    text: '技术社区',
                    link: '/platform/doc/blog/tech',
                },
                {
                    text: '大佬博客',
                    link: '/platform/doc/blog/leader',
                },
            ],
        },
        {
            text: '教程进修',
            collapsible: true,
            collapsed: false,
            items: [
                {
                    text: '体系教程',
                    link: '/platform/doc/course/system',
                },
                {
                    text: '技术进阶',
                    link: '/platform/doc/course/tech',
                },
            ],
        },
        {
            text: '优质刊文',
            collapsible: true,
            collapsed: false,
            items: [],
        },
    ],
    // 面试&收藏
    '/platform/ic': [
        {
            text: '面试攻略',
            collapsible: true,
            collapsed: false,
            items: [],
        },
        {
            text: '算法天地',
            collapsible: true,
            collapsed: false,
            items: [],
        },
        {
            text: '工具包',
            collapsible: true,
            collapsed: false,
            items: [],
        },
    ],
};

// 总览
sidebar['/platform/all'] = [
    {
        text: '总览',
        items: [
            {
                text: '介绍',
                link: '/platform/all',
            },
        ],
    },
    ...Object.values(sidebar).reduce((val, cur) => val.concat(...cur.map(item => ({ ...item, collapsed: true }))), []),
];

export default sidebar;
