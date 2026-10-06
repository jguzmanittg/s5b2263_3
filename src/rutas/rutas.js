import { createRouter, createWebHistory } from 'vue-router'
import InicioPage from '@/Paginas/InicioPage.vue'
import EjemploPage from '@/Paginas/EjemploPage.vue'
const router = createRouter(
 {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
     path: '/',
     name: 'Inicio',
     component: InicioPage,
   },
   {
     path: '/ejemplo',
     name:'ejemplo',
     component: EjemploPage,
   },
   {
     path: '/acerca',
     name: 'acerca',
     component: ()=>import('@/Paginas/AcercaPage.vue'),
   }
  ]
 }
)
export default router
