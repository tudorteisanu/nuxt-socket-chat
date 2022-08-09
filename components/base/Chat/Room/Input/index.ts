import {Component, Ref, Vue} from "nuxt-property-decorator";

@Component
export default class Messages extends Vue {
  message: string = '';
  rows: number = 1;
  maxRows: number = 2;

  @Ref('file') fileRef: any;
  @Ref('messages') messagesRef: any;

  get roomId(): number {
    return Number(this.$route.params.id)
  }

  get userId(): number {
    return this.$store.getters['room/getUserId']
  }

  sendMessage(): void {
    const payload = {
      roomId: this.roomId,
      message: this.message,
      createdAt: `${new Date().getHours().toFixed(2)}:${new Date().getMinutes().toFixed(2)}`,
      user: {
        id: this.userId,
        name: "theo",
        avatar: 'https://i.pravatar.cc/40'
      }
    }
    this.emitSocket(payload)
    this.resetForm();
    this.scrollToBottom();
  }

  resetForm(): void {
    this.message = '';
    this.rows = 1;
  }

  scrollToBottom(): void {
    const messagesBlock = document.getElementById('messages')!;
    const {scrollHeight, offsetHeight} = messagesBlock;

    if (scrollHeight !== offsetHeight) {
      setTimeout(()=> {
        messagesBlock?.scroll({
          top: scrollHeight  ,
          behavior: 'smooth',
        })
      }, 100)
    }

  }

  emitSocket(payload: any): void {
    const event = `room-${this.roomId}`

    this.$socket.client.emit('message', {
      event,
      payload
    } )
  }

  addRow(): void {
    if (this.rows >= this.maxRows) {
      return
    }
    this.rows++
  }

  pickFile(): void {
    this.fileRef?.click()
  }
}
