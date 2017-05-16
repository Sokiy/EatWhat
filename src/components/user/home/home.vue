<template>
  <div class="home">
    <banner></banner>
    <div class="midTip">
      <h2>{{ msg }}</h2>
      <h5> <small> {{Small}}</small></h5>
      <entrance></entrance>
    </div>
  </div>

</template>

<script>
  import banner from './banner';
  import entrance from './entrance';
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome',
        Small: '快速上手'
      }
    },
    components: {
      banner,
      entrance,
    }
  }

</script>
<style scoped>
  .home {
    padding-bottom: 50px;
  }

  .midTip {
    padding-top: 30px;
  }

</style>
