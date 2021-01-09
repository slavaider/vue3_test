import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "@/components/Homepage";
import Counter from '@/components/counter'
import Todo from '@/components/todo'

export default createRouter({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/counter',
            name: 'Counter',
            component: Counter
        },
        {
            path: '/todo',
            name: 'todo',
            component: Todo
        }
    ],
    history: createWebHistory(process.env.BASE_URL)
})

