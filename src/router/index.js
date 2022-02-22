import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Tasks from '../views/Tasks.vue';

const routes = [{
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/schedule',
    name: 'Schedule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Schedule.vue')
  },
    {
        path: '/statistics',
        name: 'Statistics',
        component: () => import( /* webpackChunkName: "about" */ '../views/Statistics.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router