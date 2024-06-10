import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import Hand from 'pokersolver';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(Hand).mount('#app');
