import { BSkeleton } from './components/skeleton/skeleton';
import { BSkeletonImg } from './components/skeleton/image';
import { BAspect } from './components/aspect';
import { BModal } from './components/modal';
import { BButton } from './components/button/button';

export default {
    install(Vue) {
        Vue.component('BAspect', BAspect);
        Vue.component('BSkeleton', BSkeleton);
        Vue.component('BSkeletonImg', BSkeletonImg);
        Vue.component('BModal', BModal);
        Vue.component('BButton', BButton);
    }
};
