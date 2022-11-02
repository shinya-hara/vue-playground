import { createRouter, createWebHistory } from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import routes from '~pages';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  // タイトル設定
  const BASE_TITLE = import.meta.env.VITE_APP_TITLE as string;
  document.title = to.meta.title
    ? `${BASE_TITLE} | ${to.meta.title}`
    : BASE_TITLE;
});

export default router;
