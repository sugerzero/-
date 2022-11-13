<template>
  <div class="you">
      <div class="headers">
        <i class="icon-shouqi iconfont left" v-if="!isCollapse" @click="changeHeader" ></i>
        <i class="icon-zhankai iconfont" v-else @click="changeHeader"></i>
       <div>

  <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
     <el-avatar :name='name'>{{name}}</el-avatar>
  </span>
  <el-dropdown-menu slot="dropdown">

    <el-dropdown-item command="a">注销</el-dropdown-item>
    <el-dropdown-item command="b">修改密码</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>



    </div>
      </div>
      <div class="bottom">
        <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  props:['isCollapse'],
  methods:{
    changeHeader(){
       this.$emit('changeCollapse')
},
 logouts(){
   console.log("==========")
        this.$router.replace('/login')
        window.sessionStorage.removeItem("token");
        
  },
    handleCommand(command) {
      if(command=="a"){
        this.$router.replace('/login')
        window.sessionStorage.clear("token");
      }else if(command=="b"){
        alert("修改密码")
      }
          
      }
  },
  data(){
    return{
      name:'',
    }
  },
  beforeCreate(){
     this.bus.$on('name',(data)=>{
      console.log(data)
      this.bus.name=data
    })
  },
 
  mounted(){
    //  全局事件总线
  //  this.name=this.bus.name
   this.name=window.sessionStorage.getItem("UserName"); 
  }

}
</script>

<style lang='less' scoped>
.headers{
  height: 60px;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon-shouqi,
.icon-zhankai{
  font-size: 30px;
}
</style>