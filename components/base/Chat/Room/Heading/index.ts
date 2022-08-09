import {Component, Prop, Vue} from "nuxt-property-decorator";

@Component
export default class Chat extends Vue {
  loaded: boolean = false;

  @Prop({type: String})
    roomName: string;

  @Prop({type: Number})
    usersCount: number;

  @Prop({type: String})
    avatar: string;

  @Prop({type: Boolean, default: false})
    isGroup: boolean;

  setLoaded(): void {
    this.loaded = true
  }

  get socketRoomName() {
    return `room-${this.$route.params.id}`;
  }

  goBack():void {
    this.$router.push("/messages")
  }
}
