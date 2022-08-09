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
  SET_ROOMS(state): void {
		state.rooms = [
      {
        id: 1,
        avatar: 'https://i.pravatar.cc/60',
        name: 'First chat',
        lastMessage: {
          message: 'asdfasd',
          user: {
            id: 2,
            name: "Test 2",
            avatar: 'https://i.pravatar.cc/60'
          },
          createdAt: '08:09'
        }
      },
      {
        id: 2,
        avatar: 'https://i.pravatar.cc/60',
        name: 'Second chat',
        isGroup: true,
        lastMessage: {
          message: 'asdfasd',
          user: {
            id: 1,
            name: "Test",
            avatar: 'https://i.pravatar.cc/60'
          },
          createdAt: '08:09'
        }
      },
      {
        id: 3,
        avatar: 'https://i.pravatar.cc/60',
        name: 'Third',
        lastMessage: {
          message: 'asdfasd',
          user: {
            id: 1,
            name: "Test"
          },
          createdAt: '08:09'
        }
      }
    ];
	},
  ADD_ROOM(state, room: any): void {
    state.rooms.push(room)
  },
  UPDATE_ROOM(state, {roomId, room}): void {
    const existingRoomIndex = state.rooms.findIndex((item: any) => item.id === roomId);

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

const actions: ActionTree<RoomsStoreType, BaseRootStoreType> = { };

export {
	state,
	getters,
	mutations,
	actions,
  RoomsStoreType,
};
