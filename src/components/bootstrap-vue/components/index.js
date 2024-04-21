import { pluginFactory } from '../utils/plugins';

// Component group plugins
import { AspectPlugin } from './aspect';
import { ButtonPlugin } from './button';
import { CollapsePlugin } from './collapse';
import { ModalPlugin } from './modal';
import { SkeletonPlugin } from './skeleton';
import { TabsPlugin } from './tabs';
import { TooltipPlugin } from './tooltip';

// Main plugin to install all component group plugins
export const componentsPlugin = /*#__PURE__*/ pluginFactory({
    plugins: {
        AspectPlugin,
        ButtonPlugin,
        CollapsePlugin,
        ModalPlugin,
        SkeletonPlugin,
        TabsPlugin,
        TooltipPlugin
    }
});
