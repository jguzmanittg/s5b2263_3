import { createApp } from 'vue'
import App from './App.vue'
import router from './rutas/ejemplo.js'

const aplicacion = createApp(App)
aplicacion.use(router)
aplicacion.mount('#app')

