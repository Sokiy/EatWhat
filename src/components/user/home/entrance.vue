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
  link: '/user/login',
  text: '登陆'
}, {
  icon: 'el-icon-menu',
  link: '/user/demo',
  text: '答题'
}, {
  icon: 'el-icon-search',
  link: '/user/demo',
  text: '测试'
}, {
  icon: 'el-icon-setting',
  link: '/user/demo',
  text: '关于'
},];
export default {
  data() {
    return {
      tips,
    }
  },
  methods: {
    routerGo(link) {
      let self = this;
      if (link == '/login' && localStorage.getItem('name') != null) {
        self.$confirm('您已经登陆过,无需重复登陆?', '提示', {
          confirmButtonText: '返回首页',
          cancelButtonText: '去答题',
          type: 'warning'
        }).then(() => {
          self.$router.push('/user')
        }).catch(() => {
          self.$router.push('/user/demo')
        });
      }else{
        self.$router.push(link)
      };
      if (link == 'user/demo' && localStorage.getItem('name') == null) {
        self.$confirm('您尚未登陆,是否要去登陆?', '提示', {
          confirmButtonText: '我再看看',
          cancelButtonText: '去登陆',
          type: 'warning'
        }).then(() => {
          self.$router.push('/user')
        }).catch(() => {
          self.$router.push('/user/login')
        });
      }else{
        self.$router.push(link)
      }
      //this.$router.push(link)
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
  color: #706f6f;
  transform: translate(-50%, 0);
  border: 1px solid #000;
  cursor: pointer;
}

.step:hover {
  font-size: 45px;
  color: #423e3e;
}

.icon {
  margin-top: 50%;
  transform: translate(0, -50%);
}
</style>
