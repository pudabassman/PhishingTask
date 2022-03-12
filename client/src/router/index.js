import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/login-page.vue";
import SentEmails from "@/views/sent-emails.vue";

const routes = [  
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/sent-emails',
    name: 'sent-emails',
    component: SentEmails
  }
]

const router =  createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router