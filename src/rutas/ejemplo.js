import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicio from '@/paginas/PaginaInicio.vue'
import PaginaEjemplo from '@/paginas/PaginaEjemplo.vue'

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes:[
   {
    path:'/',
    component: PaginaInicio,
   },{
    path:'/ejemplo',
    component: PaginaEjemplo,
   },{
    path:'/acerca',
    component: () => import('@/paginas/PaginaAcerca.vue'),
   }
 ] 
})
export default router
