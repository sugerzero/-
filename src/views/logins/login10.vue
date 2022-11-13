<template>
  <div>
      
     <el-form ref="form" :model="loginForm" class="loginContainer" :rules="rules">
         <h3 class="loginTitle">员工登录</h3>
       <el-form-item prop="username">
           <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
       </el-form-item>
       <el-form-item prop="password">
           <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
       </el-form-item>
             <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
             <div><router-link to="/login"> <el-link type="warning">管理员登录页</el-link></router-link></div>
     </el-form>
     <!-- <i class="iconfont icon-ruzhu"></i> -->
  </div>
</template>

<script>

import axios from 'axios';
export default {
    name:'Login',
    data(){
        return{
            captchaUrl:'',
            loginForm:{
                username:'',
                password:'',
                code:''
            },
            checked:true,
            rules:{
                username:[{required: true, message:'请输入用户名', trigger: 'blur'}],
                password:[{required:true,message:'请输入密码',trigger:'blur'}],
                code:[{required: true, message:'请输入验证码', trigger: 'blur'}]

            }
        }
    },
    methods:{
        submitLogin(){
           this.$refs.form.validate((valid) => {
          if (valid) {
              this.login();
          } else {
             this.$message.error('请输入所有字段！');
            return false;
          }
        });
        },
        login(){
        axios.get("emp/selectOne?id="+this.loginForm.username)
            .then(response=>{
                // if(response.data=="Success"){
                    this.$router.replace('/login11')
                    window.sessionStorage.setItem("name", response.data.name); 
                    window.sessionStorage.setItem("ID", response.data.ID); 
                // }else{
                //     alert("输入的字段有误，请核对后登录！")
                // }            
            })
        },
        Next(){
             axios.get('/code',{
                responseType:"blob"
            })
            .then(response=>{
                this.captchaUrl =window.URL.createObjectURL(response.data); 
                
            })
        },

       

    },
     mounted(){
            axios.get('/code',{
                responseType:"blob"
            })
            .then(response=>{
                this.captchaUrl =window.URL.createObjectURL(response.data); 
                
            })
        },
        beforeDestroy(){
            this.bus.$emit('name','zhangsan')
        }

}
</script>

<style>
.loginContainer{
    border-radius: 15px;
    background-clip:padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border:1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.loginTitle{
    margin: 5px auto 40px auto;
    text-align: center;
}

</style>