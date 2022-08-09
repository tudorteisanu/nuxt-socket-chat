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

  activated()  {
    this.$socket.client.on(this.socketRoomName, this.handleMessages);
    this.$store.commit('room/ADD_ROOM', {
      name: "Some name",
      id: this.roomId,
      avatar: 'https://i.pravatar.cc/40',
      lastMessage: {
          message: 'asdfasd',
          user: {
            id: 2,
            name: "Test 2",
            avatar: 'https://i.pravatar.cc/60'
          },
          createdAt: '08:09'
        }
    }
    )
  }

  handleMessages(payload: any): void {
    this.$store.commit('messages/ADD_MESSAGE', payload)
  }
}
</script>

