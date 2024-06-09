import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Hand from 'pokersolver'

const app = createApp(App)
app.use(Hand).mount('#app')

