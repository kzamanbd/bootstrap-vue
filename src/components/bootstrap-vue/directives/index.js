import { pluginFactory } from '../utils/plugins';
import { VBModalPlugin } from './modal';

// Main plugin for installing all directive plugins
export const directivesPlugin = /*#__PURE__*/ pluginFactory({
    plugins: {
        VBModalPlugin
    }
});
