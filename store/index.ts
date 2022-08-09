import type { GetterTree, ActionTree, MutationTree } from 'vuex';

import { MessagesStoreType } from './messages';

type BaseRootStoreType = {
  messages: MessagesStoreType,
}

const state = () => ({} as BaseRootStoreType);

const getters: GetterTree<BaseRootStoreType, BaseRootStoreType> = {};

const mutations: MutationTree<BaseRootStoreType> = {};

const actions: ActionTree<BaseRootStoreType, BaseRootStoreType> = {};

export {
	state,
	getters,
	mutations,
	actions,
	BaseRootStoreType,
};
