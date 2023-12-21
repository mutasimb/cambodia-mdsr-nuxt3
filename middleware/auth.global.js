import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // console.log('middleware: auth');

  const
    storeAuth = useAuthStore(),
    { isLoggedIn } = storeToRefs(storeAuth),
    
    token = useCookie('token');

  if (token.value) {
    isLoggedIn.value = true;

    if (to.name === "index" || to.name === "register") {
      abortNavigation();
      return navigateTo("/provider")
    }
  } else {
    isLoggedIn.value = false;

    if (to.name !== "index" && to.name !== "register") {
      abortNavigation();
      return navigateTo("/")
    }
  }
})
