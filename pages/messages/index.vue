<template>
  <div >
    <Chat />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({
  layout: 'default'
})
export default class Messages extends Vue {

  mounted(): void {
    this.$store.commit('room/SET_ROOMS', [])
  }
}
</script>
