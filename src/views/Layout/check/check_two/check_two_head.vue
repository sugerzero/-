<template>
  <div>
        <el-button type="success" @click="output()">导出报表</el-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
        return{}
    },
    methods:{
        output(){
            axios.get('salary/output')
            .then(response=>{
                console.log(response.data)
            })

        }
    }
}
</script>

<style>

</style>