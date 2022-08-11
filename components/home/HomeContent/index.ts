import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class Chat extends Vue {
  chat: any = {}
  credentials = null as any

  async createRoom(): Promise<void> {
    try {
      const {token} = JSON.parse(localStorage.getItem('credentials')!)

      const headers = {
        Authorization: `Bearer ${token}`
      }
      await this.$axios.$post('/chat', this.chat, {headers})
    } catch (e) {
      console.log(e)
    }
  }
}
