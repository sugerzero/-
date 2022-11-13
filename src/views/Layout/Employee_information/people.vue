<template>
  <div class="goods">
       <div class="header">
          <!-- 部门查询 -->
        <el-button type="primary" plain @click="selectByemp()" >部门查询</el-button>
        <el-input v-model="emp" placeholder="请输入要搜索的信息" class="selectByemp"></el-input>
         <!-- id查询 -->
        <el-button type="primary" plain @click="selectByID()" style="margin-right:10px" >工号查询</el-button>
        <el-input v-model="id" placeholder="请输入要搜索的信息" class="selectByID"></el-input>
        <!-- 名字查询 -->
        <el-button type="primary" plain @click="selectByName()" >名字查询</el-button>
        <el-input v-model="name" placeholder="请输入要搜索的信息" class="selectByID"></el-input>
        <el-button type="primary" plain  class="icon-add-circle iconfont left" style="margin-left:200px" @click="insert()" >添加</el-button>
        <!-- 查询全部 -->
        <el-button type="primary" plain @click="changePage(1)" >查询全部</el-button>
        
      </div> 

   <!-- 添加的弹出页面-->
<el-dialog
  title="添加"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
 

<el-form ref="form" :model="form.name" label-width="80px">
  <el-form-item label="姓名" style="display:inline-block;width: 40%;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="性别" style="display:inline-block;width: 40%;">
       <el-select v-model="form.sex" placeholder="性别" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="学历" style="display:inline-block;width: 50%;">
    <el-select v-model="form.Edu" placeholder="学历" >
    <el-option
      v-for="item in options_edu"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>  
  </el-select>

  </el-form-item>
  <el-form-item label="电话" style=";width: 60%;">
    <el-input v-model="form.Tel"></el-input>
  </el-form-item>
  <el-form-item label="职称" style="display:inline-block;width: 60%;">
 <el-select v-model="form.titleName" placeholder="职称">
    <el-option
      v-for="item in options_titleName"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>  
  </el-select>
  </el-form-item>
   <el-form-item label="岗位" style="display:inline-block;width: 60%;">
 <el-select v-model="form.post" placeholder="岗位">
    <el-option
      v-for="item in options_postName"
      :key="item.value"
      :id ="item.label"
      :label="item.label"
      :value="item.value">
    </el-option>  
  </el-select>
  </el-form-item>
   <el-form-item label="部门">
 <el-select v-model="form.deptName" placeholder="部门" style="display:inline-block;width: 60%;">
    <el-option
      v-for="item in options_dept"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>  
  </el-select>
  </el-form-item>
  <el-form-item label="紧急联系人" label-width="90px" style=";width: 60%;">
    <el-input v-model="form.people"></el-input>
  </el-form-item>
 <el-form-item label="紧急联系人电话" label-width="120px" style=";width: 80%;">
    <el-input v-model="form.peo_Tel"></el-input>
  </el-form-item>
</el-form>
 
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="inserts()">确 定</el-button>
  </span>
</el-dialog>



      <div class="top">
      <el-table border style="width: 100%;height:333px" :data='tableData' >
      <el-table-column  type="selection"  width="55"></el-table-column>
      <el-table-column  prop= "empId" label="工号" width="180"></el-table-column>
      <el-table-column prop="empName" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="empSex" label="性别"> </el-table-column>
      <el-table-column prop="empEdu" label="学历"  width="180"> </el-table-column>
      <el-table-column prop="empTel" label="电话" width="180"> </el-table-column>
      <el-table-column prop="title.titleName" label="职称" width="180"> </el-table-column>
      <el-table-column prop="dept.deptName" label="部门" width="180"> </el-table-column>
      <el-table-column prop="caozuo" label="操作" width="180" fixed="right">
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
      
      <div>
        <pagination :total='total' :pageSize='pageSize' @changePage="changePage"  :current='current'></pagination>
      </div>
  </div>
</template>

<script>
import Pagination from '@/views/Layout/Employee_information/Pagination'
import axios from 'axios'
export default {
  components:{
    Pagination
  },
  data(){
    return{
       options: [{
          value: 1,
          label: '男'
        }, {
          value: 2,
          label: '女'
        },],
         options_edu: [{
          value: 1,
          label: '大专'
        }, {
          value: 2,
          label: '本科'
        },{
          value: 3,
          label: '硕士'
        },
        {
          value: 4,
          label: '博士'
        },],
          options_dept: [{
          value: 1,
          label: '市场部'
        }, {
          value: 2,
          label: '企划部'
        },{
          value: 3,
          label: '销售部'
        },
        {
          value: 4,
          label: '客户服务部'
        },
        {
          value: 5,
          label: '设计部'
        },
        {
          value: 6,
          label: '行政部'
        },
        {
          value: 7,
          label: '市场部'
        },
        {
          value: 8,
          label: '业务部'
        },
        {
          value: 9,
          label: 'IT管理部'
        },],
        options_titleName:[{
            value: 1,
          label: '技术员'
        }, {
          value: 2,
          label: '工程师'
        },{
          value: 3,
          label: '销售员'
        },
        {
          value: 4,
          label: '营销员'
        },
        {
          value: 5,
          label: '清洁工'
        },
        {
          value: 6,
          label: '总监'
        },
        {
          value: 7,
          label: '设计师'
        },
        {
          value: 8,
          label: '美工师'
        },
        {
          value: 9,
          label: '创意师'
        

        }],
        options_postName:[{
          value: 1,
          label: '技术员'
        }, {
          value: 2,
          label: '工程师'
        },{
          value: 3,
          label: '销售员'
        },
        {
          value: 4,
          label: '营销员'
        },
        {
          value: 5,
          label: '清洁工'
        },
        {
          value: 6,
          label: '总监'
        },
        {
          value: 7,
          label: '设计师'
        },
        {
          value: 8,
          label: '美工师'
        },
        {
          value: 9,
          label: '创意师'
        

        },
        {
          value: 10,
          label: '创意师'
        

        },
        {
          value: 11,
          label: '创意师'
        

        },
        {
          value: 12,
          label: '创意师'
        

        }],
       handleClose:[],
       form: {
          post:'',
          name: '',
          sex:'',
          Edu:'',
          Tel:'',
          titleName:'',
          deptName:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        //紧急联系人
      people:'',
      peo_Tel:'',
      input:'',
      name:'',
      id:'',
      tableData:[],
      total:10,
      pageSize: 1,
      sex:[],
      sexs:'a',
      current:null,
      emp:'',
      dialogVisible:false
      
    }
  },
  methods:{
    inserts(){
      let sexs;
      let Edus;
      if(this.form.sex==1){
        sexs='男'
      }else{
        sexs='女'
      }
      if(this.form.Edu==1){
        Edus='大专'
      }else if(this.form.Edu==2){
        Edus='本科'
      }else if(this.form.Edu==3){
        Edus='硕士'
      }else if(this.form.Edu==4){
        Edus='博士'
      }
      axios.get('emp/insertOne?name='+this.form.name+'&sex='+sexs+'&Edu='+Edus+'&Tel='+this.form.Tel+'&title_id='+this.form.titleName+'&dept_id='+this.form.deptName+'&post_id='+this.form.post+'&people='+this.form.people+'+&peo_Tel='+this.form.peo_Tel)
      .then(response=>{
        console.log(response.data);
        if(response.data=="Success"){
           this.$message({
             message: '添加成功',
              type: 'success'
        })}
        console.log(this.form.sex);
        console.log(this.id);
      })
      this.dialogVisible = false

    },



    
     /**
         *添加信息 
         */
        insert(){
          this.dialogVisible = true;         
        },
    /**
     * 部门查询
     */
    selectByemp(emp){
      emp=this.emp
      axios.get('dept/selectdept?deptName='+emp)
      .then(response =>{
         if(response.data != null)
        console.log(response.data.list)
        this.tableData = response.data.list
        this.total = response.data.total
        this.pageSize=response.data.pageSize
      })
      .catch(function (error){
        console.log(error)
      })
    },
    changePage(page){
      axios.get("emp/selectAll?pn="+page)
       .then(response =>{
         if(response.data != null)
        console.log(response.data.list)
        this.tableData = response.data.list
        this.total = response.data.total
        this.pageSize=response.data.pageSize
        this.current=page;
      })
      .catch(function (error){
        console.log(error)
      })

    },
    selectByName(name){
      name=this.name
      axios.get('emp/queryByName?empName='+name)
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
    handleEdit(){},
    handleDelete(index){
       this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        var ID = this.tableData[index].empId
         axios.get('/emp/delectId?id='+ID)
        .then(response=>{
        console.log(response.data)
        this.selectAll()
      })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    // id查询方法
     selectByID(){
      axios.get("emp/selectOne?id="+this.id)
     .then(response => {
       console.log(response.data)
       if(this.tableData.length != 0){
         this.tableData.length = 0;        
        this.tableData.push(response.data)
        
        this.total = response.data.total
        this.pageSize=response.data.pageSize
       }else{
        this.tableData.push(response.data)
        
        this.total = response.data.total
        this.pageSize=response.data.pageSize
          console.log(this.tableData)
       }
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    selectAll(){
      axios.get("emp/selectAll")
      .then(response =>{

        this.tableData = response.data.list
        this.total = response.data.total
        this.pageSize=response.data.size
        // this.$router.push("/Login")
      })
      .catch(function (error){
        console.log(error)
      })
    }
  },
     mounted(){
     this.selectAll();
   },

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
