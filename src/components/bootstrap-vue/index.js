import { installFactory } from './utils/plugins';
import { componentsPlugin } from './components';
import { directivesPlugin } from './directives';
import { BVConfigPlugin } from './bv-config';

const NAME = 'BootstrapVue';

// --- BootstrapVue installer ---
const install = /*#__PURE__*/ installFactory({
    plugins: {
        componentsPlugin,
        directivesPlugin
    }
});

// --- BootstrapVue plugin ---
const BootstrapVue = /*#__PURE__*/ { install, NAME };

// --- Named exports for BvConfigPlugin ---
export {
    // Installer exported in case the consumer does not import `default`
    // as the plugin in CommonJS build (or does not have interop enabled for CommonJS)
    // Both the following will work:
    // BootstrapVue = require('bootstrap-vue')
    // BootstrapVue = require('bootstrap-vue').default
    // Vue.use(BootstrapVue)
    install,
    NAME,
    // BootstrapVue config plugin
    BVConfigPlugin,
    // `BVConfigPlugin` has been documented as `BVConfig` as well,
    // so we add an alias to the shorter name for backwards compat
    BVConfigPlugin as BVConfig,
    // Main BootstrapVue plugin
    BootstrapVue
};
