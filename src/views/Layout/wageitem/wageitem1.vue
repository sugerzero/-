<template>
  <div>
      <el-form
  
      :model="valueFrom"
        ref="dataForm"
        label-position="left"
        label-width="90px"
        style="width: 400px; margin-left:50px;"
      >
      <el-form-item >

        <el-form-item label="单位：元/次" ></el-form-item>

        </el-form-item>
        <el-form-item label="迟到罚金" prop="deptName">
          <el-input v-model="deptName"/>
        </el-form-item>
        <el-form-item label="早退罚金" prop="deptDesc">
          <el-input  v-model="deptName"/>
        </el-form-item>
          <el-form-item label="出差补贴" prop="deptD">
          <el-input  v-model="deptName"/>
        </el-form-item>
          <el-form-item label="全勤奖金" prop="deptDe">
          <el-input v-model="deptName" />
        </el-form-item>
          <el-form-item label="餐饮补贴" prop="deptDes">
          <el-input  v-model="deptName"/>
        </el-form-item>
          <el-form-item label="交通补提" prop="deptDesc1">
          <el-input  v-model="deptName" />
        </el-form-item>
      </el-form>
       <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click=" createData() ">保存</el-button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
           valueFrom:{
            valueFrom1:"",
            valueFrom2:"",
            valueFrom3:"",
            },
            deptName:'20',
            deptDesc:'20',
            deptD:'20',
            deptDe:'20',
            deptDes:'20',
            deptDesc1:'20',
        }
    }

}
</script>

<style>
.dialog-footer{
    margin-left: 250px;
}

</style>