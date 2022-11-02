<script setup lang="ts">
defineProps<{ msg: string }>();
const count = ref(0);
</script>

<template>
  <h2 class="msg">{{ msg }}</h2>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=Vue.volar"
      target="_blank"
      >Volar</a
    >
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
      target="_blank"
      >Tailwind CSS IntelliSense</a
    >
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" class="btn" @click="count++">
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  @apply text-emerald-500;
}

code {
  @apply rounded bg-gray-300 px-1 py-0.5 text-gray-800;
}

.msg {
  @apply text-3xl font-bold underline;
}

.btn {
  @apply rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700;
}
</style>
