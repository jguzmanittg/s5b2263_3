import { createApp } from 'vue'
import App from './App.vue'
import router from './rutas/rutas.js'
const app = createApp(App)
app.use(router)
app.mount('#app')
console.log('depurar...')