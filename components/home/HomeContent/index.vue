<template>
  <div class="w-full h-full">
      <div>
        <div>
          <div>Chat name</div>
          <input v-model="chat.name" type="text">
        </div>
        <div>
          <button @click="createRoom()">Create room</button>
        </div>
      </div>
    </div>
</template>

<script src="./index.ts" />
