<template>
  <div class="p-2 fixed bottom-0 shadow-md left-0 w-full flex items-center bg-white rounded-md focus:outline-none focus:border-none focus:ring-none">
    <button
      class="flex items-center rounded-full text-gray-500"
      :disabled="!message"
    >
      <svg width="25" height="25" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd" d="M10.0001 18C14.4184 18 18.0001 14.4183 18.0001 10C18.0001 5.58172 14.4184 2 10.0001 2C5.58184 2 2.00012 5.58172 2.00012 10C2.00012 14.4183 5.58184 18 10.0001 18ZM7.00012 9C7.55241 9 8.00012 8.55228 8.00012 8C8.00012 7.44772 7.55241 7 7.00012 7C6.44784 7 6.00012 7.44772 6.00012 8C6.00012 8.55228 6.44784 9 7.00012 9ZM14.0001 8C14.0001 8.55228 13.5524 9 13.0001 9C12.4478 9 12.0001 8.55228 12.0001 8C12.0001 7.44772 12.4478 7 13.0001 7C13.5524 7 14.0001 7.44772 14.0001 8ZM13.5357 13.5354C13.9262 13.1449 13.9262 12.5118 13.5357 12.1212C13.1451 11.7307 12.512 11.7307 12.1214 12.1212C10.9499 13.2928 9.05037 13.2928 7.8788 12.1212C7.48828 11.7307 6.85511 11.7307 6.46459 12.1212C6.07406 12.5118 6.07406 13.1449 6.46459 13.5354C8.41721 15.4881 11.583 15.4881 13.5357 13.5354Z"
          fill="currentColor"/>
      </svg>
    </button>
    <textarea
      v-model="message"
      class=" w-full border border-blue-800 rounded-md mx-2"
      :rows="rows"
      @keyup.enter="addRow()"
    > </textarea>
    <button
      v-if="!message"
      class="flex items-center rounded-full text-gray-500 w-8"
      @click="pickFile()">
      <svg class="rotate rotate-45" width="20" height="30" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"  d="M8.00012 4C6.34327 4 5.00012 5.34315 5.00012 7V11C5.00012 13.7614 7.2387 16 10.0001 16C12.7615 16 15.0001 13.7614 15.0001 11V7C15.0001 6.44772 15.4478 6 16.0001 6C16.5524 6 17.0001 6.44772 17.0001 7V11C17.0001 14.866 13.8661 18 10.0001 18C6.13413 18 3.00012 14.866 3.00012 11V7C3.00012 4.23858 5.2387 2 8.00012 2C10.7615 2 13.0001 4.23858 13.0001 7V11C13.0001 12.6569 11.657 14 10.0001 14C8.34327 14 7.00012 12.6569 7.00012 11V7C7.00012 6.44772 7.44784 6 8.00012 6C8.55241 6 9.00012 6.44772 9.00012 7V11C9.00012 11.5523 9.44784 12 10.0001 12C10.5524 12 11.0001 11.5523 11.0001 11V7C11.0001 5.34315 9.65698 4 8.00012 4Z" fill="currentColor"/>
      </svg>
    </button>
    <button
      v-else
      class="flex items-center rounded-full text-gray-500 w-8"
      @click="sendMessage()"
    >
      <svg
        style="rotate: 90deg;"  width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.3788 2 12.725 2.214 12.8944 2.55279L21.8944 20.5528C22.067 20.8978 22.0256 21.3113 21.7882 21.6154C21.5508 21.9195 21.1597 22.0599 20.7831 21.9762L12 20.0244L3.21694 21.9762C2.84035 22.0599 2.44921 21.9195 2.2118 21.6154C1.97439 21.3113 1.93306 20.8978 2.10558 20.5528L11.1056 2.55279C11.275 2.214 11.6212 2 12 2ZM13 18.1978L19.166 19.568L12 5.23607L4.83402 19.568L11 18.1978V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V18.1978Z" fill="currentColor"/>
      </svg>
    </button>
    <input ref="file" type="file" class="hidden">
  </div>
</template>

<script src="./index.ts"/>
