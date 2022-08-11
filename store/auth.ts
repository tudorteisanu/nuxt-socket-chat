import type { GetterTree, ActionTree, MutationTree } from 'vuex';
import { BaseRootStoreType } from '~/store';

const state = () => ({
	credentials: null as any,
  loggedIn: false,
});

type AuthStoreType = ReturnType<typeof state>;

const getters: GetterTree<AuthStoreType, BaseRootStoreType> = {
	getCredentials(state) {
    return state.credentials;
  },
};

const mutations: MutationTree<AuthStoreType> = {
	LOGIN(state,  credentials): void {
		state.credentials = credentials;
    state.loggedIn = true;
    localStorage.setItem('credentials', JSON.stringify(credentials))
	},
  LOGOUT(state): void {
    state.credentials = null
    state.loggedIn = false
    localStorage.removeItem('credentials')
  }
};

const actions: ActionTree<AuthStoreType, BaseRootStoreType> = {
  async login({commit}, payload: Record<string, string>): Promise<void> {
    try {
      const response = await this.$axios.$post('/auth/login', payload)
      console.log(payload, 'payload')
      commit('LOGIN', response)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
};

export {
	state,
	getters,
	mutations,
	actions,
  AuthStoreType,
};
