<template>
<div class="two">
  
    <div class="input">
    <el-button type="primary" @click="select()">搜索</el-button>
    <el-input v-model="input" placeholder="请输入内容" style="width:150px;float:left;margin: 0 10px"></el-input>
    
    <el-button type="primary" @click="insert()"  class="icon-add-circle iconfont left" style="margin-left:200px">   添加</el-button>
    <el-button type="primary" @click="changePage(1)"   style="margin-left:500px"> 检索</el-button>
    </div>
       <!-- 编辑的弹出页面 -->
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
        <el-form-item label="部门名称" prop="deptName">
          <el-input v-model="valueFrom.valueFrom1" />
        </el-form-item>
        <el-form-item label="部门备注" prop="deptDesc">
          <el-input v-model="valueFrom.valueFrom2" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        
        <el-button @click="dialogFormVisible1()">取消</el-button>
        <el-button type="primary" @click=" createData()">确定</el-button>
      </div>
    </el-dialog>


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
        <el-form-item label="部门名称" prop="deptName">
          <el-input v-model="valueFrom.valueFrom4" />
        </el-form-item>
        <el-form-item label="部门备注" prop="deptDesc">
          <el-input v-model="valueFrom.valueFrom5" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        
        <el-button @click="dialogFormVisible1()">取消</el-button>
        <el-button type="primary" @click=" insertcreateData()">确定</el-button>
      </div>
    </el-dialog>



    <!-- 表单 -->
    <div>  
    <el-table
    :data="tableData"
    style="width: 100% ;height:280px" >
    <el-table-column label="部门名称" prop="deptName"></el-table-column>
    <el-table-column label="部门备注" prop="deptDesc"></el-table-column>
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
  <div>
      <Bottom :total='total' :pageSize='pageSize' @changePage='changePage' :current='current'></Bottom>
  </div>
  </div>
   
    </div>
    
</template>

<script>
import axios from 'axios'
import Bottom from '../dept/bottom.vue'
export default {
    components:{
        Bottom
    },

    data(){
        return {
            tableData:[],
            input:'',
            total:10,
            pageSize:1,
            valueFrom:{
              valueFrom1:"",
              valueFrom2:"",
              valueFrom3:'',
              valueFrom4:'',
              valueFrom5:''
            },
            value1:'',
            value2:'',
            value3:'',
            dialogFormVisible: false,
            dialogFormVisibles:false,
            current:null,
    };
    },
    methods:{

     /**
      * 弹框取消
      */
    dialogFormVisible1(){
      this.dialogFormVisible=false,
        this.$message({
          message: '取消成功！！！',
        });
        },


        /**
         * 分页查询
         */
        changePage(page){
            axios.get('dept/selectAll?page='+page)
            .then(response=>{
                console.log(response.data)
                this.tableData=response.data.list
                this.total=response.data.total
                this.pageSize=response.data.pageSize
                this.current=page;
                // this.tableData.push(response.data)
                
            })
            
        },
  /**
   * 查询全部的部门信息
   * 
   */
         first(){
            axios.get('dept/selectAll')
            .then(response=>{
                console.log(response.data)
                this.tableData=response.data.list
                this.total=response.data.total
                this.pageSize=response.data.pageSize
                // this.tableData.push(response.data)
                // console.log(this.tableData)
            })
        },
        
         /**
          * 编辑 
          */
        handleEdit(index){
          console.log(index)
          console.log(this.tableData[index].deptName)
            this.valueFrom.valueFrom1=this.tableData[index].deptName;
            this.valueFrom.valueFrom2=this.tableData[index].deptDesc;
            this.valueFrom.valueFrom3=this.tableData[index].deptId;
            console.log(this.valueFrom.valueFrom1)
            this.dialogFormVisible = true;
        },
        /**
         *编辑-----> 修改
         */
        createData(value1,value2,value3){
          value1=this.valueFrom.valueFrom1
          value2=this.valueFrom.valueFrom2
          value3=this.valueFrom.valueFrom3
          console.log(value1,value2,value3)
          axios.get('/dept/update?deptId='+value3+'&deptName='+value1+"&deptDesc="+ value2)
          .then(response=>{
            console.log(response.data)
            this.dialogFormVisible = false
            if(response.data=="Success"){
              this.$message({
             message: '编辑成功',
              type: 'success'
         });
            }else{
          this.$message({
          message: '编辑失败',
          type: 'warning'
        });
            }
           
          })
          
        },

        /**
         *添加信息 
         */
        insert(){
          this.dialogFormVisibles = true;         
        },
        /**
         * 添加信息
         */
        insertcreateData(value4,value5){
          value4=this.valueFrom.valueFrom4
          value5=this.valueFrom.valueFrom5
          console.log(value4,value5)
         axios.get('dept/insert?deptName='+value4+'&deptDesc='+value5)
          .then(response=>{
            console.log(response.data)
            this.dialogFormVisibles = false;
            if(response.data=="Success"){
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
        },

       /**
        * 删除部门
        */
        handleDelete(index){
           this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        var ID = this.tableData[index].deptId
         axios.get('dept/deleteId?deptId='+ID)
        .then(response=>{
        console.log(response.data)
         if(response.data == "Success"){
                     this.$message({
            type: 'success',
            message: '删除成功',
          }); 
          }
      })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });            
        });
        this.changePage(1);




            // axios.get('dept/deleteId?deptId='+index)
            // .then(response=>{
            //     if(response.data == "Success"){
            //         console.log("删除成功！")
            //     }
            // })

        },  
        
        
        /**
         * 查询信息
         */

        select(input){
          input=this.input
          axios.get('dept/selectdeptName?deptName='+input)
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


        }
    },

    //在生命周期中页面加载完成后调用查询方法
    mounted(){
        this.changePage(1);
    }

}
</script>

<style>
.two{
    margin: 50px;
}
.input{
    margin-bottom: 20px;
}
</style>