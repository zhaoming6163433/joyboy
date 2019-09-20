<template>
  <div class="navtabbar">
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="friend">
          <div class="barimg home img1"></div>
          好友
        </mt-tab-item>
        <mt-tab-item id="task">
          <div class="barimg seekclass img2"></div>
          任务
        </mt-tab-item>
        <mt-tab-item id="package">
          <div class="barimg shoppingcart img3"></div>
          背包
        </mt-tab-item>
        <mt-tab-item id="share">
          <div class="barimg my img4"></div>
          分享
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
import util from '../util/util.js'

export default {
  name: 'navtabbar',
  props : [],
  data () {
    return {
      selected: ''
    }
  },
  watch: {
      selected: function (val, oldVal) {
          // 这里就可以通过 val 的值变更来确定
          switch (val) {
            case 'friend':
                this.$router.push({"name":"sharkpage"})
                break;
            case 'task':
              
                break;
            case 'package':
                this.$router.push({"name":"package"})
                break;
            case 'share':
              
                break;
          }
      }
  },
  created(){
    util.vueEvent.$off("hometabbar")
    util.vueEvent.$on("hometabbar", (flag)=>{
        this.selected = flag;
    });
  },
  methods : {
  },
  mounted(){
    
  }
}

</script>

<style lang="scss">
 .navtabbar{
  .mint-tabbar.is-fixed{
    border-top:$bord_c;
    background: $buleback;
    bottom: 0.5rem;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
      background-color:transparent;
  }
 }
</style>
<style lang="scss" scoped>
  .navtabbar{
    .barimg{
      width: 35px;
      height: 35px;
      margin: 0 auto;
      padding-bottom: 8px;
      background-repeat: no-repeat;
    }
    .home{
      background:url('../assets/images/home.png') no-repeat;
      background-size: 100%;
    }
    .seekclass{
      background:url('../assets/images/fenlei.png') no-repeat;
      background-size: 100%;
    }
    .shoppingcart{
      background:url('../assets/images/gowuche.png') no-repeat;
      background-size: 100%;
    }
    .my{
      background:url('../assets/images/my.png') no-repeat;
      background-size: 100%;
    }
  }
</style>
