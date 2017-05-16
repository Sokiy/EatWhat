<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col v-for="tip in tips" :key="tip.id" :span="4">
      <div class="step" @click="routerGo(tip.link)">
        <i v-bind:class="tip.icon" class="icon"></i>
      </div>
      <span>{{tip.text}}</span>
    </el-col>
  </el-row>
</template>
<script>
  let tips = [{
    icon: 'el-icon-edit',
    link:'/login',
    text: '登陆'
  }, {
    icon: 'el-icon-menu',
    link:'/demo',
    text: '答题'
  }, {
    icon: 'el-icon-search',
    link:'/demo',
    text: '测试'
  }, {
    icon: 'el-icon-setting',
    link:'/demo',
    text: '关于'
  }, ];
  export default {
    data() {
      return {
        tips,
      }
    },
    methods:{
      routerGo(link){
        this.$router.push(link)
      }
    }
  }

</script>
<style scoped>
  .step {
    width: 120px;
    height: 120px;
    border-radius: 50% 50%;
    margin-left: 50%;
    font-size: 40px;
    margin-bottom: 10px;
    color:#706f6f;
    transform: translate(-50%, 0);
    border: 1px solid #000;
    cursor: pointer;
  }
  .step:hover{
    font-size: 45px;
    color: #423e3e;
  }

  .icon {
    margin-top: 50%;
    transform: translate(0, -50%);
  }

</style>
