import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';
import storeConfig from './store/index';

const app = createApp(App);
const store = createStore(storeConfig);

app.use(store);
app.mount('#app');