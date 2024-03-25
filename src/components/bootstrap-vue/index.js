import { BSkeleton } from './skeleton/skeleton';
import { BSkeletonImg } from './skeleton/image';
import { BAspect } from './aspect';
import { BModal } from './modal';
import { BButton } from './button/button';

export default {
    install(Vue) {
        Vue.component('BAspect', BAspect);
        Vue.component('BSkeleton', BSkeleton);
        Vue.component('BSkeletonImg', BSkeletonImg);
        Vue.component('BModal', BModal);
        Vue.component('BButton', BButton);
    }
};
