import { createRouter, createWebHistory } from 'vue-router'
import EjemploPagina from '@/paginas/EjemploPagina.vue'
import InicioPagina from '@/paginas/InicioPagina.vue'
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes:[
   {
    path:'/',
    component: InicioPagina,
   },{
    path:'/ejemplo',
    component: EjemploPagina,
   },{
    path:'/acerca',
    component: () => import('@/paginas/AcercaPagina.vue'),
   }
 ] 
})
export default router