<script setup>
import { useSesionStore } from '@/almacenes/sesion.js'
const almacen = useSesionStore()

</script>

<template>
hola {{almacen.Nombre()}}
<nav><ul>
 <li><a href="http://www.google.com">google</a></li>
 <li><router-link to="/">Inicio</router-link></li>
 <li><router-link to="/ejemplo">Ejemplo</router-link></li>
 <li><router-link to="/acerca">Acerca</router-link></li>
 <li><router-link to="/crud">CRUD</router-link></li>
</ul>
</nav><hr>
<router-view></router-view>
</template>
<style scoped>
li {
  list-style: none;
  display: inline-flex;
  margin: 10px;
}
</style>

