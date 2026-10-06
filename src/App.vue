<script setup> </script>
<style scoped> </style>

<template>
   <ul>
    <li><router-link to="/">Inicio</router-link></li>
    <li><router-link to="/ejemplo">Ejemplo</router-link></li>
    <li><router-link to="/acerca">Acerca</router-link></li>
   </ul>
   <router-view></router-view>
</template>

