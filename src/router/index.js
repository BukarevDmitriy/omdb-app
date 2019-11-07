import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from '../components/Main';
import AppFavorites from '../components/Favorites';

Vue.use(VueRouter)

const routes = [
  {
    path: '/omdb-app',
    redirect: '/omdb-app/main',
  },
  {
    path: '/omdb-app/main',
    name: 'main',
    component: AppMain,
  },
  {
    path: '/omdb-app/favorites',
    name: 'favorites',
    component: AppFavorites,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
