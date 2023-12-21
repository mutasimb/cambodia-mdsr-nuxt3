import { defineStore, storeToRefs } from 'pinia';

import { useErrorStore } from '@/stores/error';

export const useAuthStore = defineStore('auth', () => {
  const
    router = useRouter(),

    storeError = useErrorStore(),
    { message: errorMessage } = storeToRefs(storeError),

    isLoggedIn = ref(false),
    user = ref(null),

    loading = ref(false),

    getUser = async () => {
      const { data } = await useFetch('/api/auth/user');

      console.log(
        toRaw(data.value).user
      );
      user.value = toRaw(data.value).user;
    },
    login = async ({ phone, password }) => {
      loading.value = true;
      const { data, error } = await useFetch('/api/auth/login', {
        method: 'post',
        body: { phone, password }
      });

      if (error.value) errorMessage.value = toRaw(error.value).statusMessage;

      if (data.value && data.value.token) {
        const token = useCookie('token');
        token.value = data.value.token;

        isLoggedIn.value = true;

        router.push("/provider");
      } else {
        isLoggedIn.value = false;
      }

      loading.value = false;
    },
    register = async ({ name, phone, password }) => {
      loading.value = true;
      const { data, error } = await useFetch('/api/auth/register', {
        method: 'post',
        body: { name, phone, password }
      });

      if (error.value) errorMessage.value = toRaw(error.value).statusMessage;

      if (data.value && data.value.token) {
        const token = useCookie('token');
        token.value = data.value.token;

        isLoggedIn.value = true;

        router.push("/provider");
      } else {
        isLoggedIn.value = false;
      }

      loading.value = false;
    },
    logout = () => {
      user.value = null;

      const token = useCookie('token');
      token.value = null;

      isLoggedIn.value = false;

      router.push("/");
    };

  return {
    isLoggedIn,
    user,

    loading,

    login,
    register,
    logout,
    getUser
  }
})
