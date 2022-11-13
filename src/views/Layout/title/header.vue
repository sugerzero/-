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
        <el-form-item label="职位名称" prop="postName">
          <el-input v-model="valueFrom.valueFrom1" />
        </el-form-item>
        <el-form-item label="职称补贴" prop="postDesc">
          <el-input v-model="valueFrom.valueFrom2" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click=" createData() ">确定</el-button>
      </div>
    </el-dialog>



    <el-button type="primary">主要按钮</el-button>
    <el-input v-model="input" placeholder="请输入内容" style="width:150px;float:left;margin: 0 10px"></el-input>
    </div>
    <div>  
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column label="职位名称" prop="titleName"></el-table-column>
    <el-table-column label="职称补贴" prop="titleSal"></el-table-column>
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
   <Bottom  :total="total" :pageSize="pageSize" @changePage='changePage'></Bottom>
    </div>
    
</template>

<script>

import axios from 'axios'
import Bottom from '@/views/Layout/title/bottom'
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
            },
            dialogFormVisible: false,
        }
    },
    methods:{
        selectAll(){
            axios.get('/title/selectAll')
            .then(response=>{
                console.log(response.data)
                this.tableData=response.data.list
                this.total=response.data.total
                this.pageSize=response.data.pageSize
            })
        },
         changePage(page){
             axios.get('title/selectAll?page='+page)
            .then(response=>{
                console.log(response.data)
                this.tableData=response.data.list
                this.total=response.data.total
                this.pageSize=response.data.pageSize
            })
        },
        handleEdit(index){
             this.valueFrom.valueFrom1=this.tableData[index].titleName;
            this.valueFrom.valueFrom2=this.tableData[index].titleSal;
              this.dialogFormVisible = true;
        }
    },
    mounted(){
        this.selectAll();
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