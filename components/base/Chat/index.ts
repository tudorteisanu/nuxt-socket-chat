import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class Chat extends Vue {
  loaded: boolean = false;

  get rooms(): any[] {
    return this.$store.getters["room/getRooms"]
  }

  setLoaded():void {
    this.loaded = true;
  }
}
