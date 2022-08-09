<template>
  <div class="flex items-center justify-between shadow-md p-2">
    <div @click="goBack()">
      <img src="/back-button.svg" alt="">
    </div>
    <div  class="flex items-center w-full sm:w-auto ml-3">
      <div>
        <img
            :class="{hidden: !loaded}"
            class="rounded-full"
            :src="avatar"
            alt=""
            @load="setLoaded()"
        >
        <div
          v-if="avatar && !loaded"
          class="h-10 w-10 rounded-full bg-gray-300 animate-pulse"
        />
      </div>
      <div class="ml-2">
        <div class="font-bold"> {{ roomName }}</div>
        <div v-if="isGroup" class="text-gray-500 text-sm">
          <span> {{usersCount}} </span>
          <span>Subscribers</span>
        </div>
      </div>
    </div>
    <div class="ml-2"></div>
  </div>
</template>

<script src="./index.ts" />
