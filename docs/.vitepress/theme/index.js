import Theme from 'vitepress/theme';
import './vars.scss';
import './global.scss';
import * as components from '/components/index.js';

export default {
    ...Theme,
    enhanceApp(ctx) {
        Theme.enhanceApp(ctx);
        Object.values(components).forEach(component => {
            ctx.app.component(component.name, component);
        });
    },
};
