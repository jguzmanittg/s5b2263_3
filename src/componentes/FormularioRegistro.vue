<script setup>
import { ref } from 'vue';
const estudiante = ref('si');
</script>

<template>
formulario de registro:
<form>
<label for='nombre'>nombre</label>
<input type='text' name='nombre' id='nombre'><br>
<label for='apat'>apellidos</label>
<input type='text' name='apat' id='apat'><br>
<label for='estudia'>estudia</label>
SI <input type="radio" name="esutida_grupo" value="si" id="esutidas" v-model="estudiante">
NO <input type="radio" name="esutida_grupo" value="no" id="esutidan" v-model="estudiante">
<div v-if="estudiante === 'si'">
<label for='grado'>grado</label>
<input type='text' name='grado' id='grado'><br>
<label for='grupo'>grupo</label>
<input type='text' name='grupo' id='grupo'><br>
</div>
</form>
</template>


<style scoped> </style>
