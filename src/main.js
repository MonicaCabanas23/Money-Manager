import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index.js'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

createApp(App)
.use(router)
.use(PrimeVue, {
    theme: 'none'
})
.mount('#app')
