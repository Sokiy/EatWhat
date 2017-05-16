import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/user/common/header'
import footer from '@/components/user/common/footer'
import home from '@/components/user/home/home'
import demo from '@/components/user/demo'
import login from '@/components/user/login'
import add_question from '@/components/admin/add_question'
import batch from '@/components/admin/batch'
import user from '@/components/user'
import admin from '@/components/admin'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/user',
    component: user,
    children: [{
      path: '',
      components: {
        header: header,
        body: home,
        footer: footer,
      }
    }, {
      path: 'login',
      components: {
        header: header,
        body: login,
        footer: footer,
      }
    },
    {
      path: 'demo',
      components: {
        header: header,
        body: demo,
        footer: footer,
      }
    }],
  },{
    path: '/admin',
    component: admin,
    children:[{
      path:'',
      component: login,
    },
    {
      path:'demo',
      component: demo,
    },
    {
      path:'add',
      component: add_question,
    },
    {
      path:'batch',
      component: batch,
    },
    ]
  }]
})

// export default new Router({
//   routes: [{
//       path: '/',
//       components: {
//         header: header,
//         body: home,
//         footer:footer,
//       }
//     },
//     {
//       path: '/demo',
//       components: {
//         header: header,
//         body: demo,
//         footer:footer,
//       }
//     },
//     {
//       path: '/login',
//       components: {
//         header: header,
//         body: login,
//         footer:footer,
//       }
//     },
//     {
//       path: '/add_question',
//       components: {
//         header: header,
//         body: add_question,
//         footer:footer,
//       }
//     },
//     {
//       path: '/batch',
//       components: {
//         header: header,
//         body: batch,
//         footer:footer,
//       }
//     }
//   ]
// })
