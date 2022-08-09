import { Component, Vue } from 'nuxt-property-decorator';

const CONNECT_EVENT_NAME = 'connect';
const JOIN_EVENT_NAME = 'join';

@Component
export default class SocketRoomsMixin extends Vue {
	beforeMount(): void {
		this.socketRoomBeforeMount();
	}

	socketRoomBeforeMount(): void {
		this.$socket.client.on(CONNECT_EVENT_NAME, this.emitJoinToSocketRoom);
	}

	emitJoinToSocketRoom(): void {
		if (this.socketRoomName) {
			this.$socket.client.emit(JOIN_EVENT_NAME, this.socketRoomName);
		}
	}

	get socketRoomName(): string {
		return 'room';
	}

  beforeDestroy(): void {
    this.$socket.client.removeListener(this.socketRoomName)
  }
}
