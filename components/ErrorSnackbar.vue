<script setup>
import { storeToRefs } from 'pinia';

import { useErrorStore } from '@/stores/error';

const
  storeError = useErrorStore(),
  { message } = storeToRefs(storeError),

  snackbar = ref(false),
  text = ref('');

watch(message, val => {
  if (val) {
    snackbar.value = true;
    text.value = val;
    message.value = '';
  }
});
</script>

<template>
  <v-snackbar v-model="snackbar" :timeout="5000" color="error">
    {{ text }}
    <template #actions>
      <v-btn color="white" variant="text" @click="snackbar = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>
