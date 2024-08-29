import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services';
import Contact from '../views/Contact'

Vue.use(VueRouter);

const routes = [
    { path: '/admin/home', name: 'home', component: Home },
    { path: '/admin/about', name: 'about', component: About },
    { path: '/admin/services', name: 'services',component: Services},
    { path: '/admin/contact', name: 'contact',component: Contact}
];

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
});

export default router;

