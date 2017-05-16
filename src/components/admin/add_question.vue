<template>
    <el-col :span="10" :push="7" class="clearfix">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="试题题目" prop="topic">
                <el-input type="textarea" v-model="ruleForm.topic"></el-input>
            </el-form-item>
            <el-form-item label="答案 A" prop="option_a">
                <el-input v-model="ruleForm.option_a"></el-input>
            </el-form-item>
            <el-form-item label="答案 B" prop="option_b">
                <el-input v-model="ruleForm.option_b"></el-input>
            </el-form-item>
            <el-form-item label="答案 C" prop="option_c">
                <el-input v-model="ruleForm.option_c"></el-input>
            </el-form-item>
            <el-form-item label="答案 D" prop="option_d">
                <el-input v-model="ruleForm.option_d"></el-input>
            </el-form-item>
            <el-form-item label="正确答案" prop="key">
                <el-radio-group v-model="ruleForm.key">
                    <el-radio-button label="A">答案 A</el-radio-button>
                    <el-radio-button label="B">答案 B</el-radio-button>
                    <el-radio-button label="C">答案 C</el-radio-button>
                    <el-radio-button label="D">答案 D</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="test">测试</el-button>
            </el-form-item>
        </el-form>
    </el-col>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          key:'',
          option_a:'',
          option_b:'',
          option_c:'',
          option_d:'',
          topic:'',
        },
        rules: {
          topic: [
            { required: true, message: '请填写试题题目,不能为空', trigger: 'blur' }
          ],
          option_a:[
              { required: true, message: '请填写答案,答案不能为空', trigger: 'blur' }
          ],
          option_b:[
              { required: true, message: '请填写答案,答案不能为空', trigger: 'blur' }
          ],
          option_c:[
              { required: true, message: '请填写答案,答案不能为空', trigger: 'blur' }
          ],
          option_d:[
              { required: true, message: '请填写答案,答案不能为空', trigger: 'blur' }
          ],
          key:[
              {required:true,message:'请选择一个正确选项',trigger:'change'}
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
    margin: 50px 0;
    padding: 50px 30px 20px 5px;
}
</style>