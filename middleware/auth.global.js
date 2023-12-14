import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // console.log('middleware: auth');

  const
    storeAuth = useAuthStore(),
    { isLoggedIn } = storeToRefs(storeAuth),
    
    token = useCookie('token');

  // console.log('to', to);
  // console.log('from', from);
  // console.log('token', token.value);

  if (token.value) {
    
  }

})
