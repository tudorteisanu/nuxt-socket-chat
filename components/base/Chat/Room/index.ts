import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component
export default class Chat extends Vue {
  @Prop({type: Number})
    roomId: number;

  get room(): any {
    return this.$store.getters['room/getRoomById'](this.roomId)
  }
}
