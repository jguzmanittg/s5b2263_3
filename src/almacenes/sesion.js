import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useSesionStore = defineStore('sesion', () => {
// ==========================================
// STATE (Estado protegido en el scope)
// ==========================================
const usuario = ref(null)
const token = ref(null)
const expiracion = ref(null)
// ==========================================
// GETTERS (Diferencia entre Función vs Computed) "NO MODIFICAN" al STATE
// ==========================================
/**
* FUNCIÓN TRADICIONAL:
* Retorna el valor actual de 'usuario'.
* En el template se debe invocar CON paréntesis: {{ sesionStore.Nombre() }}
*/
function Nombre() {
  return usuario.value ? usuario.value : "Invitado"
}
const Credenciales = computed(() => {
 if (token.value && expiracion.value && Date.now() < expiracion.value) {
  return {
   'Authorization': `Bearer ${token.value}`,
   'Content-Type': 'application/json'
  }
 }
 return {}
})
/**
* COMPUTED (Getter memorizado):
* Evalúa la validez de la sesión.
* En el template se consume SIN paréntesis: v-if="sesionStore.tieneSesionActiva"
*/
const tieneSesionActiva = computed(() => {
 if (token.value && expiracion.value) {
  return Date.now() < expiracion.value
 }
 return false
})
// ==========================================
// ACCIONES (Métodos de control) "SI MODIFICAN" al STATE
// ==========================================
function login(nombre, _token, segundosDuracion = 10) {
 usuario.value = nombre
 token.value = _token
 expiracion.value = Date.now() + (segundosDuracion * 1000)
}
function logout() {
 usuario.value = null
 token.value = null
 expiracion.value = null
}
// ==========================================
// INTERFAZ PÚBLICA (Solo exponemos métodos y computed, lo que esta en el return)
// ==========================================
return {
 Nombre, // Método de lectura
 Credenciales, // Método de lectura
 tieneSesionActiva, // Computed property
 login, // Acción
 logout // Acción
 }
})
