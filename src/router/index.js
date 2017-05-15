import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/common/header'
import home from '@/components/home/home'
import demo from '@/components/demo'
import login from '@/components/login'
import footer from '@/components/common/footer'
import add_question from '@/components/admin/add_question'
import batch from '@/components/admin/batch'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      components: {
        header: header,
        body: home,
        footer:footer,
      }
    },
    {
      path: '/demo',
      components: {
        header: header,
        body: demo,
        footer:footer,
      }
    },
    {
      path: '/login',
      components: {
        header: header,
        body: login,
        footer:footer,
      }
    },
    {
      path: '/add_question',
      components: {
        header: header,
        body: add_question,
        footer:footer,
      }
    },
    {
      path: '/batch',
      components: {
        header: header,
        body: batch,
        footer:footer,
      }
    }
  ]
})
