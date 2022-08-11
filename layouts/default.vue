<template>
<div class="w-full">
  <div class="h-16 bg-red-400"/>
  <div class="max-w-4xl mx-auto">
    <Nuxt keep-alive />
  </div>
</div>
</template>


<script lang="ts" >
import Vue from "vue";
export default Vue.extend({
 async mounted(): Promise<void> {
   await this.$store.dispatch('auth/login', {
     "password": "1s2ASD3d4@5678",
     "email": "test@domain.com"
   })
  }
})
</script>
