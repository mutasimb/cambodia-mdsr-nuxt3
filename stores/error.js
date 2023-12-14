import { defineStore } from 'pinia';

export const useErrorStore = defineStore('error', () => {
  const message = ref('');

  return { message }
})
