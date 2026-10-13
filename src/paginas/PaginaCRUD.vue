<script setup>
import { ref, onMounted } from 'vue'
const API = 'https://6acd0e91b406cb8ec0c6dcc5.mockapi.io/usuarios'
const registros = ref([])
const form = ref({
 id: null,
 nombre: '' ,
 apellidos: '',
 correo: ''
})
const editando = ref(false)
async function obtener(){
 const response = await fetch(API)
 registros.value = await response.json()
}
async function crear(){
 await fetch(API,{
  method:'POST',
  headers:{
   'Content-Type':'application/json'
  },
  body: JSON.stringify({
   nombre: form.value.nombre,
   apellidos: form.value.apellidos,
   correo: form.value.correo,
  })
 })
 form.value.nombre = '' 
 form.value.apellidos = '' 
 form.value.correo = ''
 obtener()
}

function editar(persona){
 editando.value = true
 form.value.id = persona.id
 form.value.nombre = persona.nombre
 form.value.apellidos = persona. apellidos
 form.value.correo = persona.correo
}

async function actualizar(){
 await fetch(`${API}/${form.value.id}`,{
  method:'PUT',
  headers:{
   'Content-Type':'application/json'
  },
  body: JSON.stringify({
   nombre: form.value.nombre,
   apellidos: form.value.apellidos,
   correo: form.value.correo
  })
 })
 cancelar()
 obtener()
}

async function eliminar(id){
 if(!confirm("¿Eliminar esta persona?")) return
 await fetch(`${API}/${id}`,{
  method:'DELETE'
 })
 obtener()
}

function cancelar(){
 editando.value = false
 form.value.id = null
 form.value.nombre = ''
 form.value.apellidos = ''
 form.value.correo = ''
}

onMounted(()=>{
 obtener()
})


</script>
<template>
<p>CRUD usando https://mockapi.io/
</p>
<div id="formulario">
{{ editando ? 'Editar' : 'Nuevo' }}
<input v-model="form.nombre" placeholder="Nombre" />
<input v-model="form.apellidos" placeholder="Apellidos" />
<input v-model="form.correo" placeholder="Correo" />
<button v-if="!editando" @click="crear">
Crear
</button>
<button v-if="editando" @click="actualizar">
Actualizar
</button>
<button v-if="editando" @click="cancelar">
Cancelar
</button>
</div>
<table border="1">
  <thead>
    <tr>
     <th>ID</th>
     <th>Nombre</th>
     <th>Apellidos</th>
     <th>Correo</th>
     <th>Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="registro in registros" :key="registro.id">
      <td>{{registro.id }}</td>
      <td>{{registro.nombre }}</td>
      <td>{{registro.apellidos }}</td>
      <td>{{registro.correo }}</td>
      <td>
        <button @click="editar(registro)">
         Editar
        </button>
        <button @click="eliminar(registro.id)">
         Eliminar
        </button>
      </td>
    </tr>
  </tbody>
</table>
</template>
<style scoped>
#formulario {
 display: inline-block;
 border: 2px solid #000000;
}
input {
 display: block;


}
</style>