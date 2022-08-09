import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component
export default class Messages extends Vue {
  @Prop({type: Number})
    roomId: number;

  get messages(): Array<any> {
    return this.$store.getters['messages/getMessagesByRoomId'](this.roomId)
  }

  get getUserId(): number {
    return this.$store.getters['room/getUserId']
  }

  messageBlockClass(message: any): string | undefined{
    if (message.user.id === this.getUserId) {
      return 'ml-auto'
    }
  }

  dateClass(message: any): string | undefined{
    if (message.user.id === this.getUserId) {
      return 'text-right'
    }
  }

  messageClass(message: any): string {
    if (message.user.id === this.getUserId) {
      return 'bg-primary-300'
    }

    return  'bg-white'

  }
}
