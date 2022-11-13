<template>
  <div>
    <div class="goods">
    <div class="header">
          <!-- 部门查询 -->
       <!-- <el-upload
  class="upload-demo"
  ref="upload"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="upload()">上传到服务器</el-button>
</el-upload> -->
<input type="file" @change="onFileSelect" /><el-button @click="upload">上传</el-button>
       

        
      </div> 
      </div>
     <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="checks.mon"
      label="月份"
      width="180">
    </el-table-column>
    <el-table-column
      prop="empName"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="empId"
      label="工号">
    </el-table-column>
     <el-table-column
      prop="dept.deptName"
      label="部门">
    </el-table-column>
     <el-table-column
      prop="checks.sickLeave"
      label="病假">
    </el-table-column>
      <el-table-column
      prop="checks.usualHour"
      label="事假">
    </el-table-column>
    <el-table-column
      prop="checks.holidayHour"
      label="度假">
    </el-table-column>
       <el-table-column
      prop="checks.weekHour"
      label="周末">
    </el-table-column>
       <el-table-column
      prop="checks.late"
      label="迟到">
    </el-table-column>
       <el-table-column
      prop="checks.early"
      label="早退">
    </el-table-column>
    
    
  </el-table>
    <div class="fenye">
      <Bottom  :total='total' :pageSize='pageSize' @changePage='changePage' :current='current'></Bottom>
 </div>
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
        fileList: [{}],
        file:[]
      }
    },
    methods:{
      select(){
        axios.get('checks/selectTime')
        .then(response=>{
          console.log(response.data)
          console.info(response.data.list.length)
          if(this.tableData!=""){
            this.tableData=[];
          }
           this.total=response.data.total
          this.pageSize=response.data.pageSize
          for(var i = 0;i<response.data.list.length; i++){
           this.tableData.push(response.data.list[i])
           console.log(this.tableData)
          }           
        })
      },
       changePage(page){
             axios.get('checks/selectTimes?page='+page)
             .then(response=>{
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
        upload(){
          let formData = new FormData();
          formData.append('file', this.file);
          axios.post('/checks/input', formData,{'Content-Type': 'multipart/form-data'}).then(res =>{
                      console.log(res)
                    } )
                    this.select();
        },
      //   submitUpload() {
      //   this.$refs.upload.submit();
      // },
      // handleRemove(file, fileList) {
      //   console.log(file, fileList);
      // },
      // handlePreview(file) {
      //   console.log(file);
      // }
   onFileSelect(e) {
      console.log("came here");
      this.file = e.target.files[0];

}
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