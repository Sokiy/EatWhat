<template>
  <header>
    <ul id="nav">
      <li v-for="item in menu" v-if="item.auth == role">
        <router-link :to="item.link">{{item.text}}</router-link>
      </li>
    </ul>
    <div id="tip">
         <p>{{uname}}, 您好 <el-button type="danger" @click="loginout" v-if="!(uname == '游客')">登出</el-button><el-button type="danger" @click="login" v-if="(uname == '游客')">登录</el-button></p>
    </div>
  </header>
</template>
<script>
import bus from '../../../bus';
let menu = [{
  link: '/user',
  text: '首页',
  auth:'normal',
}, {
  link: '/user/demo',
  text: '测试页',
  auth:'normal',
},{
  link: '/user/about',
  text: '关于',
  auth:'normal',
}, {
  link: '/admin/add',
  text: '添加题目',
  auth:'admin',
}, {
  link: '/admin/batch',
  text: '下发批次',
  auth:'admin',
},{
  link: '/admin/view',
  text: '总览',
  auth:'admin',
}]

// {
//   link: '/user/login',
//   text: '登陆页',
//   auth:'normal',
// },
export default {
  data() {
    return {
      menu,
      uname:'游客',
      role: 'normal',
    }
  },
  methods:{
    loginout(){
      let self = this;
      localStorage.removeItem("role")
      localStorage.removeItem("name")
      self.uname = '游客'
      self.$router.push('/user')
    },
    login(){
      let self = this;
      self.$router.push('/user/login')
    },
  },
  mounted() {
    let self = this;
    if (localStorage.getItem("role") != null) {
      self.role = localStorage.getItem("role");
      self.uname  = localStorage.getItem("name");
    }
    bus.$on('login', function () {
      if (localStorage.getItem("role") != null) {
        self.role = localStorage.getItem("role");
        self.uname  = localStorage.getItem("name");
      }
    });
  }
}

</script>

<style scoped>
header {
  height: 60px;
  background: #58B7FF;
}

#nav {
  height: 60px;
  float: left;
  margin: 0;
  line-height: 60px;
}

#nav li {
  float: left;
  width: 100px;
  list-style: none;
}
#nav .fright{
  float: right;
}
#tip{
  height: 60px;
  line-height: 60px;
  float: right;
  margin-right:30px;
}
#tip p{
  padding:0;
  margin:0;
}

a {
  opacity: 0.8;
  color: #fff;
  text-decoration: none;
}

a:hover {
  opacity: 1;
}
</style>
