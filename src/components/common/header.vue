<template>
  <header>
    <ul id="nav">
      <li v-for="item in menu">
        <router-link :to="item.link">{{item.text}}</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
  let menu = [{
    link: '/',
    text: '首页'
  }, {
    link: '/demo',
    text: '测试页'
  }]
  export default {
    data() {
      return {
        menu,
      }
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
    width: 300px;
    float: right;
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
