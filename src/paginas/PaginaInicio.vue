<script setup>
import { ref } from 'vue';
import { useSesionStore } from '@/almacenes/sesion.js'

const sesionStore = useSesionStore()
const usuario = ref()
const clave = ref()
function validar() {
  if(fetchAlApi(usuario.value,clave.value)){
    sesionStore.login(usuario.value, Math.random().toString(36).substring(2))
  }
}


function fetchAlApi(_usuario,_clave){
if (_usuario==_clave) return true
  else return false
}

</script>

<template>
 <template v-if="!sesionStore.tieneSesionActiva">
  <form @submit.prevent="validar" >
   <label for='usuario'>usuario</label>
     <input type='text' name='usuario' id='usuario' v-model="usuario"><br>
   <label for='clave'>clave</label>
   <input type='text' name='clave' id='clave' v-model="clave"><br>
   <input type="submit" value="VALIDAR">
  </form>
 </template>
 <template v-else>
  <button v-on:click="sesionStore.logout">
   SALIR
   </button>
  </template>
</template>
