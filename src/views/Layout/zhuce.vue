<template>
  <div>
     <el-form  class="loginContainer" >
         <h3 class="loginTitle">注册页面</h3>
       <el-form-item >
           <el-input type="text"  v-model="username" placeholder="请输入用户名"></el-input>
       </el-form-item>  
       <el-form-item >
           <el-input type="password" placeholder="请输入密码"></el-input>
           <el-button type="primary" style="width:100% ;margin-top:30px" @click="submitLogin">注册</el-button>
            <div><router-link to="/Login"> <el-link type="success">返回登录页面 </el-link></router-link ></div>
       </el-form-item>
     </el-form>
    
  </div>

     
</template>

<script>
export default {

  data(){
    return{
      username:'',
    }
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