import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import plugins from './plugins';

const app = createApp(App);

app.use(plugins);
app.use(router);

app.mount('#app');
