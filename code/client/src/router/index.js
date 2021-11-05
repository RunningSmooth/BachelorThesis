import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import FAQ from "@/views/general/FAQ";
import Contact from "@/views/general/Contact";
import Creation from "@/views/Creation";
import Plan from "@/views/Plan";
import Imprint from "@/views/general/Imprint";
import Help from "@/views/general/Help";
import Privacy from "@/views/general/Privacy";
import Test from '@/views/testing/Test.vue'
import RouterTest from "@/views/testing/RouterTest";
import NotFound from "@/views/general/NotFound";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: '/creation',
        name: 'Creation',
        component: Creation,
    },
    {
        path: '/plan',
        name: 'Plan',
        component: Plan,
        props: true
    },
    {
        path: '/imprint',
        name: 'Imprint',
        component: Imprint
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/help',
        name: 'Help',
        component: Help
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: Privacy
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/routertest',
        name: 'RouterTest',
        component: RouterTest,
        props: true
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router