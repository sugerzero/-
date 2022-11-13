<template>
  <div class="one">
<el-pagination background layout="prev, pager, next" 
:total="total" 
:pageSize='pageSize' 
:current-page.sync="current"
 @current-change="changePage"> </el-pagination>
  </div>
</template>

<script>
export default {

  props:{
    total:Number,
    pageSize:Number,
    current:Number,
  },
  methods:{
    changePage(page){
      console.log(page)
      this.$emit('changePage',page)
    }
  }

}
</script>

<style>
.one{
    text-align: center;
    margin: 20px;
}

</style>