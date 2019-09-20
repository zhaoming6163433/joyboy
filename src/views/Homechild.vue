<template>
    <div class="homechild">
        <div :class="`talkdog ${talkdogflag}`" v-show="talkdogshow">{{tiptext}}</div>
        <div class="mydog">
            <img class="imghead" v-show="!bianshen&&sharkhead" :src="joy_head" :class="`animated ${swing} ${imghead}`">
            <img class="imgfootclick" src="@assets/images/joy-angry.gif" v-show="joy_angry_show">
            <img class="imgfootclick1" src="@assets/images/joy-happy.gif" v-show="joy_happy_show">
            <img class="bianshen" v-show="bianshen" src="@assets/images/joy-turnaround.gif"/>
            <div class="dogfoot" v-show="!bianshen" @touchstart.stop.prevent="touchstartfoot"></div>
            <div class="doghead" v-show="!bianshen" @touchstart.stop.prevent="touchstarthead"></div>
            <div class="oval"><img src="@assets/images/joy-back.png"/></div>
        </div>
        <div class="dogname">JOY</div>
        <div class="mydogprogress">
            <ul>
                <li><span>毅力值</span><mt-progress class="progressdog" :value="60" :bar-height="10"></mt-progress></li>
                <li><span>耐力值</span><mt-progress class="progressdog" :value="55" :bar-height="10"></mt-progress></li>
                <li><span>潜力值</span><mt-progress class="progressdog" :value="50" :bar-height="10"></mt-progress></li>
                <li><span>活力值</span><mt-progress class="progressdog" :value="30" :bar-height="10"></mt-progress></li>
                <li><span>魅力值</span><mt-progress class="progressdog" :value="65" :bar-height="10"></mt-progress></li>
            </ul>
        </div>
    </div>
</template>

<script>

import joy_head from '@assets/images/joy_still_new.png'
import joy_cook_head from '@assets/images/joy_cook_head.png'
import joy_cook_foot from '@assets/images/joy_cook_foot.png'
import util from '@/util/util.js'
import { setTimeout } from 'timers';
import { mapMutations,mapState } from 'vuex'

export default {
    name: 'homechild',
    props: [],
    data() {
        return {
            joy_head: joy_head,
            swing:"",
            imghead:"",
            sharkhead:true,
            joy_angry_show:false,
            joy_happy_show:false,
            talkdogshow:true,
            bianshen:false,
            talkdogflag:"",
            textarr:["HI，我是你的专属萌宠","汪~~~","嗷呜！！","想要来点黑暗料理吗"],
            initext:"HI，我是你的专属萌宠",
            tiptext:"HI，我是你的专属萌宠"
        }
    },
    watch:{
        pacakgeinfo(val){
            this.showcookdog(val);
        },
    },
    components: {

    },
    created() {

    },
    computed: {
        ...mapState([
            'pacakgeinfo',//存放背包里面的某个类型
        ]),
    },
    methods: {
        showcookdog(val){
            if(val === 2){
                this.bianshen = true;
                this.initext = this.textarr[3];
                this.tiptext = this.textarr[3];
                setTimeout(()=>{
                    this.bianshen = false;
                    this.joy_head = joy_cook_head;
                    this.joy_foot = joy_cook_foot;
                    this.imghead = "cookiedog"
                },1000);

            }
        },
        showtalk(){
            setTimeout(()=>{
                this.talkdogflag = "talkdogflag";
            },5000);
            setTimeout(()=>{
                this.talkdogshow = false;
            },5180);
        },
        touchstarthead(event) {
            this.joy_happy_show = true;
            this.sharkhead = false;
            this.tiptext = this.textarr[1];
            setTimeout(()=>{
                this.joy_happy_show = false;
                this.tiptext = this.initext;
                this.sharkhead = true;
            },1000);
        },
        touchstartfoot(){
            this.tiptext = this.textarr[2];
            this.joy_angry_show = true;
            setTimeout(()=>{
                this.tiptext = this.initext;
                this.joy_angry_show = false;
            },1000)
        }
    },
    mounted() {
        this.showcookdog(this.pacakgeinfo);
        //初始化动画
        util.vueEvent.$off('firstanimate');
        util.vueEvent.$on("firstanimate",()=>{
            //this.showtalk();
            this.bianshen = true;
            setTimeout(()=>{
                this.bianshen = false;
            },1000)
        })
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .homechild {
        .swing {
            -webkit-transform-origin: bottom center;
            transform-origin: bottom center;
        }
        .mt-progress, .mt-progress>*{
            display: block;
        }
    }
</style>
<style lang="scss" scoped>
.homechild {
    @keyframes opacitydog{
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
    }
    .talkdogflag{
        animation-duration: 0.2s;
        animation-name: opacitydog;
    }
    .talkdog {
        background-color: $talk_blue;
        color: #fff;
        width: 8rem;
        height: 5rem;
        font-size: 1rem;
        line-height: 1rem;
        padding: 1rem 2rem;
        box-sizing: border-box;
        border-radius: 50%;
        position: relative;
        position: fixed;
        bottom: 25rem;
        left: 1rem;
        margin-left: 50%;
    }
    .talkdog:before {
        content: "";
        position: absolute;
        float: left;
        width: 0;
        height: 0;
        border-style: solid;
        border-bottom: none;
        border-right: 1.3rem solid transparent;
        border-left: 0.1rem solid transparent;
        border-top: 1.5rem solid $talk_blue;
        margin-top: 3.5rem;
        margin-left: 2rem;
    }
    .mydog {
        width: 14rem;
        height: 14rem;
        position: fixed;
        bottom: 12rem;
        left: -7rem;
        margin-left: 50%;
        .imghead {
            z-index: 1;
            top:1.85rem;
            position: absolute;
        }
        .cookiedog{
            top:-1rem;
        }
        .imgfoot {
            z-index: 1;
            top: 7.7rem;
            position: absolute;
        }
        .imgfootclick{
            z-index: 1;
            top: -4.8rem;
            position: absolute;
        }
        .imgfootclick1{
            z-index: 1;
            top: 1.84rem;
            position: absolute;
        }
        .oval {
            bottom: 6.5rem;
            left: 0rem;
            position: absolute;
            height: 1.5rem;
            width: 14rem;
            border-radius: 100%;
        }
        .doghead{
            width: 12rem;
            height: 6rem;
            top: 2rem;
            left: 1rem;
            position: absolute;
            z-index: 1;
        }
        .dogfoot{
            width: 8rem;
            height: 4.1rem;
            top: 8rem;
            left: 3rem;
            position: absolute;
            z-index: 1;
        }
        .bianshen{
            z-index: 2;
            position: absolute;
            top: -1.2rem;
        }
    }
    .dogname {
        font-size: 1rem;
        font-weight: bold;
        color: $talk_blue;
        text-align: center;
        width: 7rem;
        height: 1.5rem;
        line-height: 1.5rem;
        background-color: $pageback;
        border-radius: 5px;
        position: fixed;
        bottom: 11rem;
        left: -3.5rem;
        margin-left: 50%;
    }
    .mydogprogress {
        width: 14rem;
        position: fixed;
        bottom: 5rem;
        left: -7rem;
        margin-left: 50%;
        > ul > li > span {
            margin-right: 0.5rem;
            font-size: 0.6rem;
        }
        .progressdog {
            top: 0.8rem;
            width: 11rem;
            display: inline-block;
            height: 1rem;
        }
    }
}
</style>
