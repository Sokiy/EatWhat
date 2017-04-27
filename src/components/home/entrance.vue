<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col v-for="tip in tips" :key="tip.id" :span="4">
      <div class="step">
        <i v-bind:class="tip.icon" class="icon"></i>
      </div>
      <span>{{tip.text}}</span>
    </el-col>
  </el-row>
</template>
<script>
  let tips = [{
    icon: 'el-icon-edit',
    text: '编辑'
  }, {
    icon: 'el-icon-menu',
    text: '菜单'
  }, {
    icon: 'el-icon-search',
    text: '搜索'
  }, {
    icon: 'el-icon-setting',
    text: '设置'
  }, ];
  export default {
    data() {
      return {
        tips,
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
    transform: translate(-50%, 0);
    border: 1px solid #000;
  }

  .icon {
    margin-top: 50%;
    transform: translate(0, -50%);
  }

</style>
