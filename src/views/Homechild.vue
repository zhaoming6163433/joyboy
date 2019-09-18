<template>
    <div class="homechild">
        <div class="talkdog">HI，我是你的专属汪星人</div>
        <div class="mydog">
            <img class="imghead" :src="joy_head" :class="`animated ${swing}`">
            <img class="imgfoot" :src="joy_foot" >
            <div class="doghead" @touchstart.stop.prevent="touchstarthead"></div>
            <div class="oval"></div>
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
import { setTimeout } from 'timers';

export default {
    name: 'homechild',
    props: [],
    data() {
        return {
            joy_head: joy_head,
            joy_foot: joy_foot,
            swing:""
        }
    },
    components: {

    },
    created() {

    },
    computed: {

    },
    methods: {
        touchstarthead(event) {
            this.swing = "swing";
            setTimeout(()=>{
                this.swing = "";
            },1000);
        },
    },
    mounted() {
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
        left: 4rem;
        top: 1rem;
        margin: 0 auto;
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
        margin-left: 0.5rem;
    }
    .mydog {
        width: 14rem;
        height: 14rem;
        position: relative;
        margin: 0 auto;
        .imghead {
            z-index: 1;
            position: absolute;
        }
        .imgfoot {
            z-index: 1;
            top: 7.7rem;
            position: absolute;
        }
        .oval {
            bottom: 1rem;
            left: 0rem;
            position: absolute;
            background-color: #2f5597;
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
