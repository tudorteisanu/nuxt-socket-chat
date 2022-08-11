<template>
  <div class="bg-gray-100 h-full" style="min-height: calc(100vh - 64px);">
      <ChatRoom :room-id="roomId" />
  </div>
</template>

<script lang="ts">
import {Component, mixins} from "nuxt-property-decorator";
import {SocketMessagesMixin, SocketRoomsMixin} from "@/mixins/sockets";

@Component({
  layout: 'default'
})
export default class MessagesRoom extends mixins(SocketRoomsMixin, SocketMessagesMixin) {
  get roomId() {
    return Number(this.$route.params.id)
  }

  get socketRoomName() {
    return `room-${this.roomId}`;
  }

  get token(): any {
    return this.$store.getters['auth/getCredentials']?.token
  }

    async activated()  {
    this.$socket.client.on(this.socketRoomName, this.handleMessages);
    const headers = {
      authorization: `Bearer ${this.token}`
    }
    await this.$store.dispatch('room/fetchRoomById', {headers, roomId: this.roomId})
  }

  handleMessages(payload: any): void {
    this.$store.commit('messages/ADD_MESSAGE', payload)
  }
}
</script>

