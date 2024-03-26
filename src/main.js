import './assets/main.css';
import './bootstrap.scss';

import Vue from '@vue/compat';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue } from '@/components/bootstrap-vue';

Vue.use(BootstrapVue);
const app = createApp(App);
app.use(router);
app.mount('#app');
