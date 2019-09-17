<template>
  <div class="home">
        <keep-alive>
            <router-view class="child-view content"></router-view>
        </keep-alive>
        <navtabbar></navtabbar>
        <packsheet></packsheet>
        <startpage></startpage>
  </div>
</template>

<script>

import navtabbar from 'components/navtabbar'
import packsheet from 'components/packsheet'
import startpage from 'components/startpage'
export default {
    name: 'home',
    components: {
        navtabbar,
        packsheet,
        startpage
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>
<style lang="scss" scoped>
    .child-view {
         @include font(0.8rem, 0.8rem);
    }
    .content {
        overflow-x: auto;
        background: rgba(255, 255, 255, 0);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 55px;
        left: 0;
        z-index: 1;
        margin: 0;
        padding: 0;
        background-color: #f5f6fa;
    }
</style>