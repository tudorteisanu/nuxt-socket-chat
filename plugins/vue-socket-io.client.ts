import Vue from 'vue';
import { io } from 'socket.io-client';
import VueSocketIO from 'vue-socket.io-extended';
import { Plugin } from '@nuxt/types';

const IS_SOCKET_AUTO_CONNECT = true;
const RECONNECTION_ATTEMPTS = 5;
const RECONNECTION_DELAY_MS = 5000;

const vueSocketIoPlugin: Plugin = ({ store }) => {
	const socket = io("http://localhost:4000" , {
		autoConnect: IS_SOCKET_AUTO_CONNECT,
		transports: ['websocket', 'polling'],
		reconnectionDelay: RECONNECTION_DELAY_MS,
		reconnectionAttempts: RECONNECTION_ATTEMPTS,
	});

	Vue.use(VueSocketIO, socket, { store });
};

export default vueSocketIoPlugin;
