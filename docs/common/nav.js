/**
 * 配置项中的path等同于link,因为link与items冲突,但其他地方有用到这个属性,所以需要申明
 */
const nav = [
    {
        text: '总览',
        link: '/platform/all',
        path: '/platform/all',
    },
    {
        text: '框架',
        path: '/platform/framework',
        items: [
            {
                text: 'SPA&传统',
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
                text: '服务端',
                link: '/platform/framework/server'
            },
            {
                text: '微前端',
                link: '/platform/framework/micro-frontend'
            },
            {
                text: '其他框架',
                link: '/platform/framework/other',
            },
        ],
    },
    {
        text: '组件库',
        path: '/platform/component',
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
            {
                text: '功能库',
                link: '/platform/component/function',
            }
        ],
    },
    {
        text: '生态&成品',
        path: '/platform/ecology',
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
        path: '/platform/tool',
        items: [
            {
                text: '开发工具',
                link: '/platform/tool/dev',
            },
            {
                text: '构建工具',
                link: '/platform/tool/build',
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
        path: '/platform/doc',
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
        path: '/platform/learn',
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
        path: '/platform/collect',
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

export default nav;
