<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import router from './router'
import util from './util/util.js'
import { setTimeout } from 'timers';

export default {
    name: 'app',
    data() {
        return {
            titlename: {
                
            }
        }
    },
    created() {
        //缓存this
        util.vuethis = this;
        //拦截路由
        router.beforeEach((to, from, next) => {
            next();
            this.firstitle(to);
        });
        //首次进入页面设置标题
        this.firstitle();
    },
    methods: {
        hometab(to) {
            if (this.titlename[to.name]) {
                document.title = this.titlename[to.name];
            }
            switch (to.name) {
                case 'sharkpage':
                util.vueEvent.$emit("hometabbar", 'friend');
                break;
                case 'task':
                util.vueEvent.$emit("hometabbar", 'task');
                break;
                case 'package':
                util.vueEvent.$emit("hometabbar", 'package');
                break;
                case 'share':
                util.vueEvent.$emit("hometabbar", 'share');
                break;
                default:
                util.vueEvent.$emit("hometabbar", '');
                break;
            }
        },
        //第一次进入页面也判断标题
        firstitle(to) {
            let url = window.location.href;
            let name = '';
            if (url.indexOf('?') != -1) {
                name = url.substring(url.indexOf('#') + 2, url.indexOf('?'));
            } else {
                name = url.substring(url.indexOf('#') + 2);
            }
            let _arr = name.split('/');
            name = _arr[_arr.length - 1];
            document.title = "inJOY ZONE";
            if(to){
                this.hometab(to);
            }else{
                setTimeout(()=>{
                    this.hometab({name:name});
                },300)
            }
        }
    },
    components: {

    }
}
</script>

<style lang="scss" >
    @import "assets/css/common.scss";
</style>
