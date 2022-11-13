<template>
<div>
  <div class="goods">
    
    <div class="header">
          <!-- 部门查询 -->
        <el-button type="primary" plain @click="selectByemp()" >日期查询</el-button>
        <el-input v-model="emp" placeholder="请输入要搜索的信息" class="selectByemp"></el-input>
         <!-- id查询 -->
       
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
    <div class="fenye">
      <Bottom  :total='total' :pageSize='pageSize' @changePage='changePage' :current='current'></Bottom>
 </div>

   <el-button type="success" @click="output()">导出报表</el-button>
  </div>
</template>

<script>
import Bottom from '@/views/Layout/check/check_one/check_one_bottom'
import axios from 'axios'
export default {
  components:{
    Bottom
  },
  data() {
      return {
        tableData: [],
        object:{},
        pageSize:'',
      }
    },
    methods:{
        output(){
            axios.get('salary/output')
            .then(response=>{
                console.log(response.data)
                if(response.data=='Success'){
                  this.$message({message:'导出成功',type:'success'})
                }else{
                   this.$message.error('导出失败');
                }
            })
    },
      select(){
        axios.get('salary/selectTimes')
        .then(response=>{
          console.log(response.data)
          console.info(response.data.list.length)
           this.total=response.data.total
          this.pageSize=response.data.pageSize
          this.tableData=response.data.list
          // for(var i = 0;i<response.data.list.length; i++){
          //  this.tableData.push(response.data.list[i])

          // }           
        })
      },
       changePage(page){
             axios.get('salary/finAlla?page='+page)
             .then(response=>{
               console.log(response.data)
                this.tableData.length=0
                for(var i = 0;i<response.data.list.length; i++){
               this.tableData.push(response.data.list[i])
                console.log(this.tableData)
          } 
                this.total=response.data.total
                this.pageSize=response.data.pageSize
                this.current=page;                
        })
        },
    },
    mounted(){
      this.select();
    }
}
</script>

<style lang='less' scoped>
.goods{
  margin: 20px;
  .header{
    display: flex;
    button{
      margin-left: 20px;
    }
  }
  .top{
    margin: 20px 0;
  }
}
.selectByID,
.selectByemp{
  width: 200px;
}
</style>