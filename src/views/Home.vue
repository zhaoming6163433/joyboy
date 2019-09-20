<template>
  <div class="home">
        <keep-alive>
            <router-view class="child-view content"></router-view>
        </keep-alive>
        <preloadimg></preloadimg>
        <navtabbar></navtabbar>
        <packsheet></packsheet>
        <startpage></startpage>
        <dogtext></dogtext>
  </div>
</template>

<script>

import navtabbar from 'components/navtabbar'
import packsheet from 'components/packsheet'
import startpage from 'components/startpage'
import dogtext from 'components/dogtext'
import preloadimg from 'components/preloadimg'
export default {
    name: 'home',
    components: {
        navtabbar,
        packsheet,
        startpage,
        dogtext,
        preloadimg
    },
    methods: {
        
    },
    mounted() {
        var jrappDl_1 = new jrappDl({
            ifAwakeApp: '',//是否唤起APP，0不启动，1启动，默认启动
            ifAutoDlApp: '',//是否下载APP，0不下载，1下载，默认不下载
            jumpType: '',//见下方表一，默认登陆方式不需登录跳native页
            jumpUrl: '',//见下方表二，默认跳首页
            productId: '',//详情页产品id
            activityId: '',//m页id
            sourceUrl: '',//必须传的参数，一般为当前页的url,一般只到.html，后边的参数可以省掉。需要找 --李世新-- 申请一个渠道id。示例：encodeURIComponent('渠道id*https://m.jr.jd.com/spe/downloadApp/index.html?id=')
            param: '',//自定义传参
        })
        jrappDl_1.awakeOnly();
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
        background-color: $buleback;
    }
</style>