import {createRouter, createWebHistory} from 'vue-router'
import Homepage from '@/components/Homepage'
import Counter from '@/components/counter'
import Todo from '@/components/todo'
import Tabs from '@/components/tabs'
import Users from '@/components/users/users'
import Repos from '@/components/repos/user_repos'
import Teleport from '@/components/teleport'

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
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/repos',
      name: 'repos',
      component: Repos
    },
    {
      path: '/teleport',
      name: 'teleport',
      component: Teleport
    }
  ],
  history: createWebHistory(process.env.BASE_URL)
})
