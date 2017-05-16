<template>
  <el-col :span="11" :push="6" class="clearfix">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="批次title" prop="topic">
        <el-input type="text" v-model="ruleForm.topic" placeholder="请输入批次标题"></el-input>
      </el-form-item>
  
      <el-form-item label="活动时间" prop="date1">
        <el-col :span="10">
          <el-date-picker v-model="ruleForm.date" type="datetime" :picker-options="pickerOptions2" placeholder="选择时间范围" align="center">
          </el-date-picker>
        </el-col>
      </el-form-item>
  
      <el-form-item label="选择题目">
        <el-transfer v-model="value" :data="data" :titles="['全部题目列表', '选择题目列表']" :footer-format="{noChecked: '${total}',hasChecked: '${checked}/${total}'}"></el-transfer>
      </el-form-item>
  
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建批次</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="getData">获取题目</el-button>
      </el-form-item>
  
    </el-form>
  </el-col>
</template>
<script>
const generateData = _ => {
  const data = [];
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`,
      // disabled: i % 4 === 0
    });
  }
  return data;
};
export default {
  data() {
    const getData = _ => {
      const self = this;
      let data = [];
      let result = [];
      self.axios.get('/question/get/0')
        .then(function (response) {
          data = response.data;
          data.forEach(function (item,idx) {
            result.push({
              key: item.id,
              label: item.topic,
            })
          }, this);
          self.data = result;
        })
        .catch(function (error) {
          console.log(error);
        })
    };
    return {
      data: getData(),
      value: [],
      renderFunc(h, option) {
        return "<span class='a'>{ option.key } - { option.label }</span>";
      },
      pickerOptions2: {
        shortcuts: [{
          text: '10分钟之后',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 / 6);
            picker.$emit('pick', date);
          }
        }, {
          text: '30分钟之后',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() + 3600 * 1000 / 2);
            picker.$emit('pick', date);
          }
        }]
      },
      ruleForm: {
        date: '',
        topic: '',
      },
      rules: {
        topic: [
          { required: true, message: '请填写批次标题,不能为空', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: false, message: '请选择时间范围,不能为空', trigger: 'change' }
        ],
        choose: [
          { type: 'array', required: true, message: '请至少选择3个', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let data = {}
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let delay = Math.round((this.ruleForm.date-new Date())/60000);
          data.delay = delay;
          data.topic = this.ruleForm.topic;
          data.value = this.value;
          this.axios.post('/question/start', { data: data })
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getData() {
      const self = this;
      let data = [];
      let result = [];
      self.axios.get('/question/get/0')
        .then(function (response) {
          data = response.data;
          data.forEach(function (item) {
            result.push({
              key: item.id,
              label: item.topic,
            })
          }, this);
          self.data = result;
        })
        .catch(function (error) {
          console.log(error);
        })
    },
  }
}
</script>
<style scoped>
.el-transfer {
  text-align: left;
}

.clearfix {
  float: none;
  border: 1px solid #c4c4c4;
  margin: 100px 0;
  padding: 50px 30px 20px 5px;
}

.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>