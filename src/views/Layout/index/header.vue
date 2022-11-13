<template>
  <div>
     <div>
        <el-menu
      default-active="、"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      router
      >
  
      <el-menu-item >
        <i >ESMS </i>
        <span slot="title">| 管理员端</span>
      </el-menu-item>
      <el-menu-item index="/login2">
        <i class="icon-home-2-fill iconfont left"  ></i>
        <span slot="title"> 首页</span>
      </el-menu-item>
      <el-menu-item index="/login3">
        <i class="icon-connections iconfont left"></i>
        <span slot="title">部门管理</span>
      </el-menu-item>
      <el-menu-item index="/login4">
        <i class="icon-tool iconfont left"></i>
        <span slot="title">岗位管理</span>
      </el-menu-item>
      <el-menu-item index="/login5">
        <i class="icon-duowenjian iconfont left"></i>
        <span slot="title">职称奖金管理</span>
      </el-menu-item>
      <el-submenu index="/login6">
        <template slot="title">
          <i class="icon-user-filling iconfont left"></i>
          <span>员工管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/login6/people">
           <i class="icon-user-filling iconfont left"></i>
          <span>员工信息</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <i class="icon-discount-fill iconfont left"></i>
          <span>工资项管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/login7/wageitem1">
           <i class="icon-discount-fill iconfont left"></i>
          <span>工资项</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="icon-jiance iconfont left"></i>
          <span>月考勤管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/login8/check_one">
           <i class="icon-jiance iconfont left"></i>
          <span>月考勤列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="1">
        <template slot="title">
          <i class="icon-discount-fill iconfont left"></i>
          <span>工资管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/login9/wages1">
           <i class="icon-discount-fill iconfont left"></i>
          <span>工资列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <!-- <el-submenu index="">
        <template slot="title">
          <i class="icon-fapiao iconfont left"></i>
          <span>工龄奖金管理</span>
        </template> -->
        <!-- <el-menu-item-group>
          <el-menu-item index="/login6/people">
           <i class="icon-fapiao iconfont left"></i>
          <span>工龄列表</span>
          </el-menu-item>
        </el-menu-item-group>  -->
      <!-- </el-submenu> -->
    </el-menu>
     </div>
  </div>
</template>

<script>
export default {
  props:['isCollapse'],
  data(){
    return{
    }
  },
  methods:{
    
  }

}
</script>

<style>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .left{
    margin: 0 8px;
  }

</style>