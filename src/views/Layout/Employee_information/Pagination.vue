<template>
<div class="one">
    <el-pagination
  background
  layout="total,prev, pager, next,jumper"
  :total="total" :pageSize="pageSize" 
  :current-page.sync="current"
  @current-change="changePage">
</el-pagination>
</div>
</template>

<script>
export default {

    props:{
        total:{
            type:Number,
            },
        pageSize:{
            type:Number,
        },
        page:{
            type:Number
        },
        current:{
            type:Number,
        }
        
    },
    methods:{

        changePage(page){
            this.$emit("changePage",page)
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