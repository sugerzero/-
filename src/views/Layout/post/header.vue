<template>
<div class="two">
    <div class="input">
      
  <!-- 弹出页面 -->
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form
        :model="valueFrom"
        ref="dataForm"
        label-position="left"
        label-width="90px"
        style="width: 400px; margin-left:50px;"
      >
     
      <el-form-item label="编辑">
          
        </el-form-item>
        <el-form-item label="岗位名称" prop="postName">
          <el-input v-model="valueFrom.valueFrom1" />
        </el-form-item>
        <el-form-item label="岗位备注" prop="postDesc">
          <el-input v-model="valueFrom.valueFrom2" />
        </el-form-item>
        <el-form-item label="岗位补贴" prop="postSal">
          <el-input v-model="valueFrom.valueFrom3" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click=" createData() ">确定</el-button>
      </div>
    </el-dialog>







    <el-button type="primary" @click="selectByname()">部门查询</el-button>
    <el-input v-model="input" placeholder="请输入内容" style="width:150px;float:left;margin: 0 10px"></el-input>
    <el-button type="primary" @click="insert()"  class="icon-add-circle iconfont left" style="margin-left:200px">   添加</el-button>
    <el-button type="primary" @click="changePage(1)"   style="margin-left:500px"> 检索</el-button>



      <!-- 添加的弹出页面-->
    <el-dialog :visible.sync="dialogFormVisibles">
      <el-form  
        :model="valueFrom"
        ref="dataForm"
        label-position="left"
        label-width="90px"
        style="width: 400px; margin-left:50px;"
      >
      <el-form-item label="添加">
        </el-form-item>
        <el-form-item label="岗位名称" prop="deptName">
          <el-input v-model="valueFrom.valueFrom4" />
        </el-form-item>
        <el-form-item label="岗位备注" prop="deptDesc">
          <el-input v-model="valueFrom.valueFrom5" />
        </el-form-item>
        <el-form-item label="岗位补贴" prop="deptDesc">
          <el-input v-model="valueFrom.valueFrom6" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        
        <el-button @click="dialogFormVisible1()">取消</el-button>
        <el-button type="primary" @click=" insertcreateData()">确定</el-button>
      </div>
    </el-dialog>
    </div>
    <div>  
    <el-table
    :data="tableData"
    style="width: 100%;height:350px">
    <el-table-column label="岗位名称" prop="postName"></el-table-column>
    <el-table-column label="岗位备注" prop="postDesc"></el-table-column>
    <el-table-column label="岗位补贴" prop="postSal"></el-table-column>
    <el-table-column label="操作" prop="desc"> 
         <template slot-scope="scope">
      <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          
      </template>
    </el-table-column>
  </el-table>
  </div>
  <div class="fenye">
      <Bottom  :total='total' :pageSize='pageSize' @changePage='changePage' :current='current'></Bottom>
 </div>
  

</div>
    
</template>

<script>
import axios from 'axios'
import Bottom from '../post/bottom.vue'
export default {
    components:{
      Bottom
    },
 data(){
        return{
            input:'',
            tableData:[],
            total:10,
            pageSize:1,
            valueFrom:{
            valueFrom1:"",
            valueFrom2:"",
            valueFrom3:"",
            valueFrom4:"",
            valueFrom5:"",
            valueFrom6:"",
            },
            dialogFormVisible: false,
            dialogFormVisibles:false,
            current:null
        }
    },
    methods:{
          dialogFormVisible1(){
      this.dialogFormVisibles=false,
        this.$message({
          message: '取消成功！！！',
        });
          },
        selectByname(input){
          input=this.input
          console.log(input)
          axios.get('post/selectpostName?postName='+input)
           .then(response=>{
            console.log(response.data)
          
           if(this.tableData.length != 0){
           this.tableData.length = 0;        
            this.tableData=response.data.list
            this.total=response.data.total
            this.pageSize=response.data.pageSize
        
       }else{
          
          console.log(this.tableData)
          
       }
           
          })
        },

        first(){
            axios.get('post/selectAll')
            .then(response=>{
                console.log(response.data)
                this.tableData=response.data.list
                this.total=response.data.total
                this.pageSize=response.data.pageSize
            })
        },
        changePage(page){
             axios.get('post/selectAll?page='+page)
            .then(response=>{
                console.log(response.data)
                this.tableData=response.data.list
                this.total=response.data.total
                this.pageSize=response.data.pageSize
                this.current=page;
            })
        },
        handleEdit(index){
             this.valueFrom.valueFrom1=this.tableData[index].postName;
            this.valueFrom.valueFrom2=this.tableData[index].postDesc;
             this.valueFrom.valueFrom3=this.tableData[index].postSal;
              this.dialogFormVisible = true;
            

        },

        insert(){
          this.dialogFormVisibles = true;         
        },
         /**
         * 添加信息
         */
        insertcreateData(value4,value5,value6){
          value4=this.valueFrom.valueFrom4
          value5=this.valueFrom.valueFrom5
          value6=this.valueFrom.valueFrom6
          console.log(value4,value5)
         axios.get('post/insert?postName='+value4+'&postDesc='+value5+'&postSal='+value6)
          .then(response=>{
            console.log(response.data)
            this.dialogFormVisibles = false;
            if(response.data==1){
              this.$message({
             message: '添加成功',
              type: 'success'
         });
            }else{
          this.$message({
          message: '添加失败',
          type: 'warning'
        });
            }
          })
         this.valueFrom.valueFrom4="";
         this.valueFrom.valueFrom5="";
        this.valueFrom.valueFrom6="";
        },







    },
    mounted(){
        this.first();
    }
}
</script>

<style  lang='less' scoped>
.two{
    margin: 50px;
    height: 445px;
}
.input{
    margin-bottom: 20px;
}


</style>