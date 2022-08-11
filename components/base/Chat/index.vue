<template>
  <div class="w-full h-full">
    <div v-if="rooms.length">

      <NuxtLink
        v-for="(room, roomIndex) in rooms"
        :key="roomIndex"
        :to="`/messages/room/${room.id}`"
        class="flex items-center justify-between border-b hover:bg-gray-100 cursor-pointer border-b-gray-500 p-2">
        <div>
          <img
            :class="{hidden: room.avatar && !loaded}"
            class="rounded-full"
            :src="room.avatar"
            alt=""
            @load="setLoaded()"
          >
          <div
            v-if="room.avatar && !loaded"
            class="h-12 w-12 rounded-full bg-gray-300 animate-pulse"
          />
        </div>
        <div class="w-full ml-3">
          <div class="flex items-center justify-between">
            <div class="font-bold">
              {{room.name}}
            </div>
            <div v-if="room.lastMessage" class="text-sm text-gray-500 leading-3">
              {{room.lastMessage.createAt}}
            </div>
          </div>
          <div v-if="room.lastMessage">
           <span v-if="room.isGroup" class="font-bold">
             {{room.lastMessage.user.name}}:
           </span>
            <span class="text-gray-500">
              {{room.lastMessage.message}}
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div v-else class="flex items-center justify-center h-full flex-col">
      <div>
        :(
      </div>
      <div class="text-gray-500">
        There are no rooms.
      </div>
    </div>
    </div>
</template>

<script src="./index.ts" />
