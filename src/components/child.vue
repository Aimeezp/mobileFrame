<template>
  <div class="child">
     物联网自研中心

    <!--匿名slot-->
    <slot></slot>
    <!--实名slot-->
    <slot name="cpu">这里是CPUslot</slot>
    <slot name="gpu">这里是gpuslot</slot>
    <slot name="momery">这里是momeryslot</slot>
  </div>

</template>

<script>
export default {
  name: 'child',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
