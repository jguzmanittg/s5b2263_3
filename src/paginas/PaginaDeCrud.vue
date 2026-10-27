<script setup>

import { ref, onMounted } from 'vue'
import { useSesionStore } from '@/almacenes/sesion.js'

const almacen = useSesionStore()
const API = "https://6acd0e91b406cb8ec0c6dcc5.mockapi.io/usuarios"
const registros = ref([])

const formulario = ref({
 id: null,
 nombre: "",
 apellidos: "",
 correo: ""
})
const editando = ref(false)

async function obtener(){
 const response = await fetch(API);
 registros.value = await response.json();
}

async function crear() {
 await fetch(API,{
  method:"POST",
  headers: {"Content-Type":"application/json"},
  body:JSON.stringify({
   nombre:formulario.value.nombre,
   apellidos:formulario.value.apellidos,
   correo:formulario.value.correo
  })
 })
 formulario.value.nombre=""
 formulario.value.apellidos=""
 formulario.value.correo="" 
 obtener()
}

async function editar(persona) {
 editando.value = true; 
 formulario.value.id = persona.id
 formulario.value.nombre = persona.nombre
 formulario.value.apellidos = persona.apellidos
 formulario.value.correo = persona.correo
}

async function actualizar() {
 const cual = API + "/" + formulario.value.id
 await fetch(cual,{
  method:"PUT",
  headers: {"Content-Type":"application/json"},
  body:JSON.stringify({
   nombre:formulario.value.nombre,
   apellidos:formulario.value.apellidos,
   correo:formulario.value.correo
  })
 })
 editando.value = false
 formulario.value.nombre=""
 formulario.value.apellidos=""
 formulario.value.correo="" 
 obtener()
}

async function cancelar() {
 editando.value = false 
 formulario.value.nombre=""
 formulario.value.apellidos=""
 formulario.value.correo="" 
}

async function eliminar(persona) {
 const respuesta = confirm("¿Eliminar este registro?")
 if(!respuesta) return
 const cual = API + "/" + persona.id
 await fetch(cual,{
  method:"DELETE",
 })
 obtener()
}

onMounted(()=>{
 obtener()
})
</script>

<template>

  <template v-if="almacen.tieneSesionActiva">
  CRUD usando https://mockapi.io/<br>
  <!-- 
  if (editando){
    System.out.println('Editar');
  }else{
    System.out.println('Nuevo');
  }
  -->
  {{ editando ? 'Editar' : 'Nuevo' }}
  <input v-model="formulario.nombre" placeholder="Nombre" />
  <input v-model="formulario.apellidos" placeholder="Apellidos" />
  <input v-model="formulario.correo" placeholder="Correo" />
  <button v-if="!editando" @click="crear">
  Crear
  </button>
  <button v-if="editando" @click="actualizar">
  Actualizar
  </button>
  <button v-if="editando" @click="cancelar">
  Cancelar
  </button>
  <table border="1">
  <thead>
    <tr>
    <th>ID</th>
    <th>nombre</th>
    <th>apellidos</th>
    <th>correo</th>
    <th>acciones</th>
    </tr>
  </thead>
  <tbody>
  <!-- Si hay registros, iteramos la lista -->
  <template v-if="registros.length">
    <tr v-for="registro in registros" :key="registro.id">
    <td>{{ registro.id }}</td>
    <td>{{ registro.nombre }}</td>
    <td>{{ registro.apellidos }}</td>
    <td>{{ registro.correo }}</td>
    <td>
      <button @click="editar(registro)">Editar</button>
      <button @click="eliminar(registro)">Eliminar</button>
    </td>
    </tr>
    </template>
    <!-- Si la lista está vacía (length === 0) -->
    <tr v-else>
    <td colspan="5" style="text-align: center;">
      No hay registros disponibles
    </td>
    </tr>
  </tbody>
  </table>
  </template>
  <template v-else>
    DEBES INICIAR SESION
  </template>
</template>


<style scoped>
</style>