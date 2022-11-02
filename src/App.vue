<template>
  <h1>{{ title }}</h1>
  <img class="mx-auto" alt="Vue logo" src="./assets/images/logo.png" />
  <nav>
    Router:
    <router-link to="/">/</router-link> |
    <router-link to="/users">/users</router-link> |
    <router-link to="/users/1">/users/:id</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE;
</script>

<style>
#app {
  @apply mt-14 text-center;

  color: var(--color-base);
}
</style>
