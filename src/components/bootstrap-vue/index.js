import { installFactory } from './utils/plugins';
import { componentsPlugin } from './components';
import { directivesPlugin } from './directives';

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

export default BootstrapVue;
