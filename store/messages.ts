import type { GetterTree, ActionTree, MutationTree } from 'vuex';
import { BaseRootStoreType } from '~/store';

const state = () => ({
	messages: [] as any[],
});

type MessagesStoreType = ReturnType<typeof state>;

const getters: GetterTree<MessagesStoreType, BaseRootStoreType> = {
	getMessagesByRoomId: state => (roomId: number): any | undefined => {
    return state.messages.filter((item: any) => item.roomId === roomId) || [];
  },
};

const mutations: MutationTree<MessagesStoreType> = {
	SET_MESSAGES(state,  messages): void {
		state.messages = messages;
	},
  ADD_MESSAGE(state,  message): void {
    state.messages.push(message)
  }
};

const actions: ActionTree<MessagesStoreType, BaseRootStoreType> = { };

export {
	state,
	getters,
	mutations,
	actions,
  MessagesStoreType,
};
