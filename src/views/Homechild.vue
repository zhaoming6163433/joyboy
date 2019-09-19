<template>
    <div class="homechild">
        <div :class="`talkdog ${talkdogflag}`" v-show="talkdogshow">HI，我是你的专属汪星人</div>
        <div class="mydog">
            <img class="imghead" v-show="!bianshen" :src="joy_head" :class="`animated ${swing} ${imghead}`">
            <img class="imgfoot" v-show="!bianshen" :src="joy_foot">
            <img class="imgfootclick" :src="joy_angry" v-show="joy_angry_show">
            <img class="bianshen" v-show="bianshen" src="@assets/images/joy-turnaround.gif"/>
            <div class="dogfoot" v-show="!bianshen" @touchstart.stop.prevent="touchstartfoot"></div>
            <div class="doghead" v-show="!bianshen" @touchstart.stop.prevent="touchstarthead"></div>
            <div class="oval"><img src="@assets/images/joy-back.png"/></div>
        </div>
        <div class="dogname">专属萌宠</div>
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

import joy_head from '@assets/images/joy-head.png'
import joy_foot from '@assets/images/joy-foot.png'
import joy_cook_head from '@assets/images/joy_cook_head.png'
import joy_cook_foot from '@assets/images/joy_cook_foot.png'
import joy_angry from '@assets/images/joy-angry.gif'
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
            joy_foot: joy_foot,
            joy_angry: joy_angry,
            joy_angry_show:false,
            talkdogshow:true,
            bianshen:false,
            talkdogflag:""
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
            this.swing = "swing";
            setTimeout(()=>{
                this.swing = "";
            },1000);
        },
        touchstartfoot(){
            this.joy_angry_show = true;
            setTimeout(()=>{
                this.joy_angry_show = false;
            },1000)
        }
    },
    mounted() {
        this.showcookdog(this.pacakgeinfo);
        this.showtalk();
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
        left: 50%;
        top: 1rem;
        margin: 0 auto;
        margin-top:3rem;
        position: absolute;
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
        position: relative;
        margin: 0 auto;
        margin-top:8rem;
        .imghead {
            z-index: 1;
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
        margin: 0 auto;
    }
    .mydogprogress {
        width: 14rem;
        margin: 0 auto;
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
