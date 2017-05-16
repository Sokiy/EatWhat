<template>
  <header>
    <ul id="nav">
      <li v-for="item in menu" v-if="item.auth == role">
        <router-link :to="item.link">{{item.text}}</router-link>
      </li>
    </ul>
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
}, {
  link: '/user/login',
  text: '登陆页',
  auth:'normal',
}, {
  link: '/admin/add',
  text: '添加题目',
  auth:'admin',
}, {
  link: '/admin/batch',
  text: '下发批次',
  auth:'admin',
}]
export default {
  data() {
    return {
      menu: menu,
      role: 'normal',
    }
  },
  mounted() {
    let self = this;
    if (localStorage.getItem("role") != null) {
      self.role = localStorage.getItem("role");
    }
    bus.$on('login', function () {
      if (localStorage.getItem("role") != null) {
        self.role = localStorage.getItem("role");
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
  width: 500px;
  float: left;
  margin: 0;
  line-height: 60px;
}

#nav li {
  float: left;
  width: 100px;
  list-style: none;
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
