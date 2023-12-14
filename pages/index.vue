<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores/auth';

import imgMachine from '~/assets/img/auth/seeder-thai-kid.jpg';
import imgLogoFacebook from '~/assets/img/auth/logo-facebook.png';

definePageMeta({
  layout: 'auth'
});

const
  { locale, setLocale } = useI18n(),
  btnLocale = computed({ get: () => locale.value, set: val => setLocale(val) }),

  storeAuth = useAuthStore(),
  { loading } = storeToRefs(storeAuth),
  { login } = storeAuth;

const
  onSubmit = () => {
    login({
      phone: phone.value,
      password: password.value
    });
  },
  onFacebook = () => { };

const
  phone = ref(''),
  password = ref('');
</script>

<template>
  <v-main style="min-height: 100vh;" id="page-login">
    <v-container fluid class="fill-height pa-0">
      <v-row class="fill-height">
        <v-col class="pa-0 d-none d-md-block" style="max-height: 100vh;">
          <v-img height="100%" :src="imgMachine" width="100%" cover />
        </v-col>
        <v-col class="d-flex flex-column justify-center align-center" style="width: 100%;">
          <v-btn-toggle v-model="btnLocale" class="mb-8" rounded="lg" color="primary-700" variant="outlined" mandatory>
            <v-btn height="40" value="km-KH">{{ locale === 'km-KH' ? 'Khmer' : 'ខ្មែរ' }}</v-btn>
            <v-btn height="40" value="en-US">{{ locale === 'km-KH' ? 'English' : 'អង់គ្លេស' }}</v-btn>
          </v-btn-toggle>
          <v-form class="text-center" style="width: 360px; max-width: 100%;" @submit.prevent="onSubmit">
            <div class="h-200-heavy text-primary-black">{{ $t("Welcome to Connecting mDSR") }}</div>
            <div class="p-100-light text-disabled-black mt-4 mb-8">{{ $t("Enter your phone number and password") }}</div>

            <div class="l-100 text-primary-black text-left">{{ $t("Phone Number") }}</div>
            <v-text-field v-model="phone" variant="outlined" color="neutral-300" density="compact" rounded="lg"
              :placeholder="$t('Enter your phone number')" />

            <div class="l-100 text-primary-black text-left">{{ $t('Password') }}</div>
            <v-text-field v-model="password" variant="outlined" color="neutral-300" density="compact" rounded="lg"
              type="password" :placeholder="$t('Enter your password')" />

            <v-btn type="submit" height="40" rounded="lg" block class="mt-8 b-100 e-400" color="primary-700">
              <v-progress-circular v-if="loading" :size="32" color="white" indeterminate />
              <span v-else>{{ $t('Sign In') }}</span>
            </v-btn>

            <div class="d-flex align-center">
              <v-divider class="my-8 mr-2" color="primary-700" />
              <div class="text-subtitle-2">{{ $t("or") }}</div>

              <v-divider class="my-8 ml-2" color="primary-700" />
            </div>

            <v-btn height="40" rounded="lg" block variant="outlined" class="b-100" color="primary-black"
              @click="onFacebook"><v-img class="mr-2" :width="20" :height="20" :src="imgLogoFacebook" /> {{
                $t("Connect with Facebook")
              }}</v-btn>

            <div class="text-subtitle-2 mt-4">
              {{ $t("Don't have an account?") }} <NuxtLink to="/register">{{ $t('Register Now') }}</NuxtLink>.
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
