import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import PostList from './components/PostList.vue'
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', components: PostList},
      //{ path:  '/posts/:id', component: PostDetailPage, name: 'post-detail'},
    ]
})

export default router;