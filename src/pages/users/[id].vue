<template>
  <h1>@/pages/users/[id].vue</h1>
  <p>UserId: {{ $route.params.id }}</p>
</template>

<route>
{ meta: { title: 'ユーザー詳細' } }
</route>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
