module.exports = {
    base: '/web-resources/',
    title: 'Web-resources',
    lang: 'zh-CN',
    description: '整理汇集前端开发者资源,包含 WEB H5 小程序 学习资料 等',
    head: createHead(),
    themeConfig:{
        algolia:{
            appId:'',
            apiKey:'',
            indexName:'web-resources'
        }
    }
};
