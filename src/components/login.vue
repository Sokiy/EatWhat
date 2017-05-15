<template>
    <el-col :span="8" :push="8" class="clearfix">
        <div class="login_box" v-if='islogin'>
            <p class="top_title">登录</p>
            <el-form ref="form" :model="form" label-position="left">
                <el-form-item>
                    <el-input placeholder="请输入用户名" v-model="form.name" size="large"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="请输入用户密码" type="password" v-model="form.passwd" size="large"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onLogin">立即登录</el-button>
                    <!--<el-button type="primary" @click="onCookie">测试cookie</el-button>-->
                </el-form-item>
            </el-form>
            <p class="bottom_title">还没有账号,
                <el-button type="text" @click="isLogin">马上注册>></el-button>
            </p>
        </div>
        <div class="register_box" v-if='!islogin'>
            <p class="top_title">注册</p>
            <el-form ref="form" :model="form" label-position="left">
                <el-form-item>
                    <el-input placeholder="用户名" v-model="form.name" size="large"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="用户密码" type="password" v-model="form.passwd" size="large"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="确认密码" type="password" v-model="form.passwd" size="large"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onRegister">立即注册</el-button>
                    <!--<el-button type="primary" @click="onCookie">测试cookie</el-button>-->
                </el-form-item>
            </el-form>
            <p class="bottom_title">已有账号,
                <el-button type="text" @click="isLogin">马上登录>></el-button>
            </p>
        </div>
    </el-col>
</template>
<script>
import router from '../router/index';
import bus from '../bus'
export default {
    data() {
        return {
            form: {
                name: '',
                passwd: '',
            },
            islogin:true,
        }
    },
    methods: {
        onRegister() {
            self = this;
            this.axios.post('/account/register', { 'name': self.form.name, 'pwd': self.form.passwd })
                .then(function (response) {
                    bus.$emit('login', self.form.name);
                    console.log(self.form.name);
                    // router.push('/demo')
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        onLogin() {
            self = this;
            this.axios.post('/account/login', { 'name': self.form.name, 'pwd': self.form.passwd })
                .then(function (response) {
                    bus.$emit('login', self.form.name);
                    console.log(self.form.name);
                    // router.push('/demo')
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        //切换登录注册面板
        isLogin(){
            this.islogin = !this.islogin;
        },
        onCookie() {
            this.axios.post('/account/login', { 'name': self.form.name, 'pwd': self.form.passwd })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
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
    padding: 10px 40px 20px;
}

.top_title {
    font-size: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #c4c4c4;
}

.bottom_title {
    font-size: 14px;
    padding-top: 20px;
    border-top: 1px dashed #c4c4c4;
}
</style>