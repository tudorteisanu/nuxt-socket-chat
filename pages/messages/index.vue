<template>
  <div>
    <Chat/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({
  layout: 'default'
})
export default class Messages extends Vue {
  get credentials(): any {
    return this.$store.getters['auth/getCredentials'] || {}
  }

  async fetch(): Promise<void> {
    const {token} = this.credentials
    await this.$store.dispatch('room/fetchRooms', {authorization: token})
  }
}
</script>
