/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

import { BootstrapVue } from '@/components/bootstrap-vue';

export default {
    install(Vue) {
        Vue.use(BootstrapVue);
    }
};
