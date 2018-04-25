import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import article from '@/components/article'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Index',
        component: index
      }, {
        path: '/index',
        name: 'Index',
        component: index
      }, {
        path: '/article',
        name: 'article',
        component: article
      }
    ]
  })
}
