import { pluginFactory } from '../utils/plugins';

// Component group plugins
import { AspectPlugin } from './aspect';
import { ButtonPlugin } from './button';
import { ModalPlugin } from './modal';
import { SkeletonPlugin } from './skeleton';

// Main plugin to install all component group plugins
export const componentsPlugin = /*#__PURE__*/ pluginFactory({
    plugins: {
        AspectPlugin,
        ButtonPlugin,
        ModalPlugin,
        SkeletonPlugin
    }
});
