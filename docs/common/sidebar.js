import nav from './nav';
// 过滤掉指定页面
const findPaths = ['/platform/all'];
const findNav = nav.filter(item => !findPaths.includes(item.path));
const sidebar = {
    '/platform/all': [
        {
            text: '总览',
            items: [
                {
                    text: '介绍',
                    link: '/platform/all',
                },
            ],
        },
        ...findNav.map(item => ({ ...item, collapsible: true, collapsed: true })),
    ],
    ...findNav.reduce((val, cur) => {
        if (cur.path) {
            val[cur.path] = [cur];
        }
        return val;
    }, {}),
};

export default sidebar;
