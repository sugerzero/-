<template>
  <div id="mains" >
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  props:['data2'],

mounted(){
  // let colors = ['#5470c6','#91cc75','#fac858','#ee6666','#73c0de']
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('mains'));
// 绘制图表
myChart.setOption({
   title: {
    text: '工资占比',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: this.data2[0].Number, name: '2000-3000' },
        { value: this.data2[1].Number, name: '3000-4000' },
        { value: this.data2[2].Number, name: '4000-5000' },
        { value: this.data2[3].Number, name: '5000-6000' },
        { value: this.data2[4].Number, name: '6000-7000' },
        { value: this.data2[5].Number, name: '7000+' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}); 

}

}
</script>

<style>

#mains{
  width: 600px;
  height: 400px;
  
  margin-top: 100px;
}
</style>