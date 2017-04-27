import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/common/header'
import home from '@/components/home/home'
import demo from '@/components/demo'
import footer from '@/components/common/footer'

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
    }
  ]
})
