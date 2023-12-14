<script setup>
import { useAuthStore } from '@/stores/auth';

const
  storeAuth = useAuthStore(),

  { logout, getUser } = storeAuth,

  onLogout = () => { logout(); },
  onGetUser = () => { getUser(); };
</script>

<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <div class="text-h1">Logged In</div>
        <v-btn @click="onLogout">Log out</v-btn>
        <v-btn @click="onGetUser">Get User</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
