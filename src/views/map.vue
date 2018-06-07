<template>
  <div class="amap-page-container">
    <el-amap ref="map" vid="amapDemo"  :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
      <!--<el-amap-marker v-for="marker in markers" :position="marker.position" :content="marker.content" :events="marker.events"></el-amap-marker>-->
    </el-amap>

    <div class="toolbar">
      <button @click="getMap()">get map</button>
    </div>
  </div>
</template>

<script>
  // NPM 方式
  // import { AMapManager } from 'vue-amap';
  // CDN 方式
  // let amapManager = new VueAMap.AMapManager();
  module.exports = {
    data() {
      return {
        // amapManager,
        zoom: 12,
        center: [121.59996, 31.197646],
        markers: [],
        events: {
          // init: (o) => {
          //   console.log(o.getCenter());
          //   console.log(this.$refs.map.$$getInstance());
          //   o.getCity(result => {
          //     console.log(result)
          //   })
          // },
          'moveend': () => {
          },
          'zoomchange': () => {
          },
          'click': (e) => {
            alert('map clicked');
          }
        },
        plugin: ['ToolBar', {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(o) {
              console.log(o);
            }
          }
        }]
      };
    },

    methods: {
      getMap() {
        // amap vue component
        // console.log(amapManager._componentMap);
        // gaode map instance
        // console.log(amapManager._map);
      }
    }
  };
</script>

<style scoped lang="scss">
  .amap-page-container{
    margin: 10px;
    .amap-demo {
      height: 300px;
    }
  }

</style>
