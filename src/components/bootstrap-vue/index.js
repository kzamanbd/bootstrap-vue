import { BSkeleton } from './skeleton/skeleton';
import { BSkeletonImg } from './skeleton/image';
import { BAspect } from './aspect';

export default {
    install(Vue) {
        Vue.component('BAspect', BAspect);
        Vue.component('BSkeleton', BSkeleton);
        Vue.component('BSkeletonImg', BSkeletonImg);
    }
};