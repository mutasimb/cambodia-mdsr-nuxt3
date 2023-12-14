<script setup>
// import { useAuthStore } from '@/stores/auth';
// import { useFormProfileStore } from '@/stores/form-profile';

// const
//   route = useRoute(),
//   nuxtApp = useNuxtApp(),

//   storeAuth = useAuthStore(),
//   storeFormProfile = useFormProfileStore();

// storeAuth.getToken();

// nuxtApp.hook('page:finish', () => {
//   if (route.path === '/profile') storeFormProfile.watchGeo();
// });
// nuxtApp.hook('page:start', () => {
//   if (route.path === '/profile') storeFormProfile.watchGeoStop();
// });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
