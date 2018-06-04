<template>
   <div>
     <mt-button type="primary"   @click="counter +=1">点击按钮</mt-button> <p>点击的次数：{{counter}}</p>
      <child>
        <!--匿名slot-->
        <p>1223445</p>

        <!--实名slot-->
        <div slot="cpu">intel i5</div>
        <div slot="gpu">显示芯片</div>
        <div slot="momery">128G</div>
      </child>
   </div>
</template>

<script>
  import child from '../components/child.vue'
    export default {
        name: "test",
        data(){
            return{
              counter:0
            }
        },
      components:{
          child,
      }
    }
</script>

<style scoped>

</style>
