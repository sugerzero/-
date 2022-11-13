<template>
  <div>
    
    <son  v-if='data.length'   :data='data' class="add" />
    <son2 v-if='data2.length'   :data2='data2' class="add"/>

  </div>
</template>

<script>
import son from '@/views/logins/login2/login2_son.vue'
import son2 from '@/views/logins/login2/login2_son2.vue'
import axios from 'axios'
export default {
  components:{
    son,
    son2
  },
  data(){
    return{
      data:[],
      data2:[],
    }
  },
  async  created(){
    axios.get('salary/finAlls')
  .then(response=>{
    this.data=response.data
    this.data2=response.data
    console.log('data'+this.data)
     console.log('data2'+this.data2.length)
  })
  }

}
</script>

<style>
.add{
  display: inline-block;
}

</style>