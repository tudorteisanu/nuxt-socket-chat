<template>
  <div class="w-full pb-[58px]">
    <ChatRoomHeading
      v-if="room"
      :room-name="room.name"
      :users-count="room.usersCount"
      :avatar="room.avatar"
    />
    <ChatRoomMessages :room-id="roomId"/>
    <ChatRoomInput/>
  </div>
</template>

<script src="./index.ts" />
