import type { GetterTree, ActionTree, MutationTree } from 'vuex';
import { BaseRootStoreType } from '~/store';
import {randomInteger} from "~/utils";

const state = () => ({
	rooms: [] as any,
  userId: randomInteger(2334, 9999)
});

type RoomsStoreType = ReturnType<typeof state>;

const getters: GetterTree<RoomsStoreType, BaseRootStoreType> = {
	getRooms(state: RoomsStoreType): any[] {
		return state.rooms;
	},
  getRoomById: state => (roomId: number): any | undefined => {
    return state.rooms.find((item: any) => item.id === roomId) || [];
  },
  getUserId(state: RoomsStoreType): number {
    return state.userId
  }
};

const mutations: MutationTree<RoomsStoreType> = {
  SET_ROOMS(state, rooms): void {
		state.rooms = rooms
    //   [
    //   {
    //     id: 1,
    //     avatar: 'https://i.pravatar.cc/60',
    //     name: 'First chat',
    //     lastMessage: {
    //       message: 'asdfasd',
    //       user: {
    //         id: 2,
    //         name: "Test 2",
    //         avatar: 'https://i.pravatar.cc/60'
    //       },
    //       createdAt: '08:09'
    //     }
    //   },
    //   {
    //     id: 2,
    //     avatar: 'https://i.pravatar.cc/60',
    //     name: 'Second chat',
    //     isGroup: true,
    //     lastMessage: {
    //       message: 'asdfasd',
    //       user: {
    //         id: 1,
    //         name: "Test",
    //         avatar: 'https://i.pravatar.cc/60'
    //       },
    //       createdAt: '08:09'
    //     }
    //   },
    //   {
    //     id: 3,
    //     avatar: 'https://i.pravatar.cc/60',
    //     name: 'Third',
    //     lastMessage: {
    //       message: 'asdfasd',
    //       user: {
    //         id: 1,
    //         name: "Test"
    //       },
    //       createdAt: '08:09'
    //     }
    //   }
    // ];
	},
  ADD_ROOM(state, room: any): void {
    const roomIndex = state.rooms.findIndex((item: any) => item.id === room.id)

    if (roomIndex !== -1) {
      state.rooms[roomIndex] = {
        ...state.rooms[roomIndex],
        ...room
      }
    } else {
      state.rooms.push(room)
    }
  },
  UPDATE_ROOM(state, room): void {
    const existingRoomIndex = state.rooms.findIndex((item: any) => item.id === room.id);

    if (existingRoomIndex !== -1) {
      state.rooms[existingRoomIndex] = {
        ...state.rooms[existingRoomIndex],
        ...room,
      }
    } else {
      state.rooms.push(room)
    }
  }
};

const actions: ActionTree<RoomsStoreType, BaseRootStoreType> = {
  async fetchRooms({commit}, headers: any): Promise<void> {
    // eslint-disable-next-line no-useless-catch
    try {
      const {data: rooms} = await  this.$axios.$get('/chats', {headers})
      commit('SET_ROOMS', rooms)
    }catch (e) {
      throw e
    }
  },
  async fetchRoomById({commit}, {headers, roomId}): Promise<void> {
    // eslint-disable-next-line no-useless-catch
    try {
      const room = await  this.$axios.$get(`/chats/${roomId}`, {headers})
      commit('UPDATE_ROOM', room)
    }catch (e) {
      throw e
    }
  }
};

export {
	state,
	getters,
	mutations,
	actions,
  RoomsStoreType,
};
