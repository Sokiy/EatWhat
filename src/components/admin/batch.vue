<template>
    <el-col :span="11" :push="6" class="clearfix">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="批次title" prop="topic">
                <el-input type="text" v-model="ruleForm.topic" placeholder="请输入批次标题"></el-input>
            </el-form-item>
    
            <el-form-item label="活动时间" prop="date1">
                <el-col :span="10">
                    <el-date-picker v-model="ruleForm.date" type="datetimerange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="center">
                    </el-date-picker>
                </el-col>
            </el-form-item>
    
            <el-form-item label="选择题目">
                <el-transfer v-model="value" :data="data" :titles="['全部题目列表', '选择题目列表']" :footer-format="{noChecked: '${total}',hasChecked: '${checked}/${total}'}"></el-transfer>
            </el-form-item>
    
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建批次</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
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
            label: `备选项 ${ i }`,
            // disabled: i % 4 === 0
          });
        }
        return data;
      };
  export default {
    data() {
      return {
          data: generateData(),
          value: [1],
          renderFunc(h, option) {
            return "<span>{ option.key } - { option.label }</span>";
          },
          pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
         ruleForm: {
          date:'',
        },
        rules: {
          topic: [
            { required: true, message: '请填写批次标题,不能为空', trigger: 'blur' }
          ],
          date1: [
            { type:'date',required: true, message: '请填写批次标题,不能为空', trigger: 'blur' }
          ],
          choose: [
            { type:'array',required: true, message: '请至少选择3个', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.axios.post('/question/add',{question:this.ruleForm})
              .then(function (response) {
                  if(response.data.status == 10005){
                      alert("添加试题成功")
                  }else{
                      alert('未知错误')
                  }
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
      test(){
          this.axios.post('/question/test')
          .then(function(response){
              console.log(response.data)
          })
          .catch(function(error){
              console.log(error)
          })
      }
    }
  }
</script>
<style scoped>
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