<template>
  <div class="navtabbar">
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="homechild">
          <div class="barimg home img1"></div>
          首页
        </mt-tab-item>
        <mt-tab-item id="seekclasschild">
          <div class="barimg seekclass img2"></div>
          分类
        </mt-tab-item>
        <mt-tab-item id="shopcar">
          <div class="barimg shoppingcart img3"></div>
          购物车
        </mt-tab-item>
        <mt-tab-item id="myInfo">
          <div class="barimg my img4"></div>
          我的
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
      selected: 'homechild'
    }
  },
  watch: {
      selected: function (val, oldVal) {
          // 这里就可以通过 val 的值变更来确定
          switch (val) {
            case 'seekclasschild':
              this.$router.push({'name':'seekclasschild'})
              break;
            case 'homechild':
              this.$router.push({'name':'homechild'});
              break;
            case 'shopcar':
              this.$router.push({'name':'shopcar'});
              break;
            case 'myInfo':
              this.$router.push({'name':'myInfo'});
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
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color: $nav_tabbar;
    color: $black_c!important;
    .img1{
      background:url('../assets/images/home_sel.png') no-repeat;
      background-size: 100%;
    }
    .img2{
      background:url('../assets/images/fenlei_sel.png') no-repeat;
      background-size: 100%;
    }
    .img3{
      background:url('../assets/images/gowuche_sel.png') no-repeat;
      background-size: 100%;
    }
    .img4{
      background:url('../assets/images/my_sel.png') no-repeat;
      background-size: 100%;
    }
  }
  .mint-tabbar.is-fixed{
    border-top:$bord_c;
  }
</style>
<style lang="scss" scoped>
  .navtabbar{
    .barimg{
      width: 24px;
      height: 24px;
      margin: 0 auto;
      padding-bottom: 5px;
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
