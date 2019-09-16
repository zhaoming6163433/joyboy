<template>
  <div class="home">
        <keep-alive>
            <router-view class="child-view"></router-view>
        </keep-alive>
        <navtabbar></navtabbar>
  </div>
</template>

<script>

import navtabbar from 'components/navtabbar'
export default {
    name: 'home',
    components: {
        navtabbar
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
        top: 51px;
        right: 0;
        bottom: 0;
        left: 200px;
        z-index: 1;
        min-width: 900px;
        margin: 0;
        padding: 0;
        background-color: #f5f6fa;
    }
</style>