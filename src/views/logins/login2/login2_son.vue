<template>
  <div id="main" >
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  props:['data'],

mounted(){
  let colors = ['#5470c6','#91cc75','#fac858','#ee6666','#73c0de']
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
  tooltip: {},
   title: {
    text: '员工工资区间分布图'
  },
  xAxis: {
    data: ['2000-3000', '3000-4000', '4000-5000', '5000-6000', '6000-7000', '7000+']
  },
  yAxis: {},
  series: [
    {
      name: '人数',
      type: 'bar',
      data: [this.data[0].Number,this.data[1].Number,this.data[2].Number,this.data[3].Number,this.data[4].Number,this.data[5].Number],
      itemStyle:{
        color:params=>colors[params.dataIndex]||'#fac858'
      }
    }
  ]
}); 

}

}
</script>

<style>

#main{
  width: 600px;
  height: 400px;
  margin-left: 60px;
  margin-top: 100px ;
}
</style>