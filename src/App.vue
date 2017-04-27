<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="body"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  html,
  body {
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  /* 设置滚动条的样式 */

   ::-webkit-scrollbar {
    width: 12px;
  }
  /* 滚动槽 */

   ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    /*border-radius: 3px;*/
  }
  /* 滚动条滑块 */

   ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

   ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 0, 0, 0.4);
  }

</style>
