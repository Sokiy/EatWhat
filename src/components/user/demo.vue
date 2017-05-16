<template>
  <el-col :span="10" :offset="7" class="contentWrap">
    <p>第一题</p>
    <el-card class="box-card" :body-style="{ padding: '20px 0px' }">
      <div slot="header">
        <p style="line-height: 36px;">卡片名称</p>
      </div>
        <div v-for="option in data" :key="option.id" class="item">
          <el-radio class="radio" v-model="radio" :label="option.id">{{option.option}}</el-radio>
        </div>
      <div class="operate">
        <el-button class="button" icon="arrow-left" @click="pre">上一题</el-button>
        <el-button type="primary" class="btn_r" @click="next">下一题<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import bus from '../../bus'
let data1 = [{ id: 1, option: '答案1' }, { id: 2, option: '答案2' }, { id: 3, option: '答案3' }, { id: 4, option: '答案4' }]
let data2 = [{ id: 1, option: 'q答案1' }, { id: 2, option: 'q答案2' }, { id: 3, option: 'q答案3' }, { id: 4, option: 'q答案4' }]
export default {
  name: 'demo',
  data() {
    return {
      radio: '1',
      data: data1,
    }
  },
  methods:{
    pre(){
      this.data = data1;
    },
    next(){
      this.data = data2; 
    }
  }
};
</script>
<style scoped>
.item {
  font-size: 14px;
  padding: 10px 20px;
}

.box-card {
  text-align: left;
  margin: 50px 0;
}

.contentWrap {
  float: none;
}
.operate{
  margin-top:20px;
  padding:20px 50px 0 50px;
  border-top: 1px solid #d1dbe5;
}
.btn_r{
  float: right;
}
</style>
