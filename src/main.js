import './assets/main.css';
import './bootstrap.scss';

import Vue from '@vue/compat';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import plugins from './plugins';

const app = createApp(App);

Vue.use(plugins);
app.use(router);

app.mount('#app');
