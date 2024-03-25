/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

import BootstrapVue from '@/components/bootstrap-vue';

export default {
    // eslint-disable-next-line no-unused-vars
    install(app) {
        app.use(BootstrapVue);
    }
};
