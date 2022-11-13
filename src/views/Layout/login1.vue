<template>
  <div class="layout">
      <Header class="header" :isCollapse='isCollapse'></Header>
      <Left class="left" :class="{action:isCollapse}" @changeCollapse="changeCollapse" :isCollapse='isCollapse'></Left>
  </div>
</template>

<script>
import Header from '../Layout/index/header.vue'
import Left from '../Layout/index/left.vue'
export default {
  data(){
   return{
   isCollapse:false,
   }

  },
  components:{
   Header,
   Left
  },
  methods:{
    changeCollapse(){
      this.isCollapse = !this.isCollapse
    }
  }

}
</script>

<style lang='less' scoped>
.layout{
  .header{
  background-color: #999;
  position: fixed;
  top:0;
  bottom: 0;

  }
  .left{
    margin-left: 200px;
    transition: 0.4s;
  }
  .action{
    margin-left: 64px;
  }
}

</style>