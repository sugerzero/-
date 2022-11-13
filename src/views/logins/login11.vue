<template>
  <div class="you">
      <div class="headers">
        <i></i>
        <p style="color:aliceblue;font-size:30px">员工工资页面 </p> 
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
   <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="mon"
      label="月份"
      width="130">
    </el-table-column>
    <el-table-column
      prop="empName"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="empId"
      label="工号">
    </el-table-column>
     <el-table-column
      prop="realSal"
      label="实发工资">
    </el-table-column>
     <el-table-column
      prop="shouldSal"
      label="应发工资">
    </el-table-column>
      <el-table-column
      prop="baseMoney"
      label="基础工资">
    </el-table-column>
    <el-table-column
      prop="businessTripSal"
      label="出差补贴">
    </el-table-column>
       <el-table-column
      prop="postSal"
      label="部门补贴">
    </el-table-column>
       <el-table-column
      prop="foodSal"
      label="餐补">
    </el-table-column>
       <el-table-column
      prop="trafficSal"
      label="交通补助">
    </el-table-column>
       <el-table-column
      prop="overtimeSal"
      label="全勤奖">
    </el-table-column>
       <el-table-column
      prop="titleSal"
      label="职称奖金">
    </el-table-column>
       <el-table-column
      prop="workSal"
      label="工龄补助">
    </el-table-column>


    
  </el-table>
  </div>
</template>

<script>
import axios from 'axios'
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
      tableData:[],
    }
  },
  mounted(){
    this.name=window.sessionStorage.getItem("name"); 
    let ID=window.sessionStorage.getItem("ID"); 
    console.log(ID)
    axios.get("salary/selectOne?id="+ID)
    .then(response=>{
      this.tableData.push(response.data)
      console.log(response.data)
    })
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