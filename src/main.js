import { createApp } from 'vue'
import App from './App.vue'
import router from './rutas/ejemplo.js'
import { createPinia } from 'pinia'

const aplicacion = createApp(App)
aplicacion.use(router)
aplicacion.use(createPinia())
aplicacion.mount('#app')
