<template>
    <div class="startpage" v-show="showstartpage">
        <div class="textstyle">收到一份神秘包裹，是什么呢？快打开看看吧！</div>
        <div :class="`imgstyle animated ${tada}`" @click="clbox" :style="{ width: boxwidth + 'rem' }"><img :src="box_img"/></div>
    </div>
</template>

<script>

import util from '@/util/util.js'
import box_still from '@assets/images/box_still.png'
import box_open from '@assets/images/box_open.png'
import { setTimeout } from 'timers';
export default {
    name: 'startpage',
    props: [],
    data() {
        return {
            box_img: box_still,
            tada:"",
            boxwidth:14,
            showstartpage:true
        }
    },
    components: {

    },
    created() {

    },
    computed: {

    },
    methods: {
        clbox(){
            this.tada = "tada";
            setTimeout(()=>{
                this.box_img = box_open;
                this.boxwidth = 18;
            },1000);
            setTimeout(()=>{
                this.showstartpage = false;
            },2000);
        }
    },
    mounted() {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.startpage {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #fff;
    text-align:center;
    .textstyle{
        width: 14rem;
        border-radius: 10px;
        background-color: $pageback;
        padding: 1rem;
        border:1px solid $bordercolor;
        margin: 0 auto;
        color:$text_c;
        margin-top:5rem;
        font-size:1rem;
    }
    .imgstyle{
        width:14rem;
        margin: 0 auto;
        margin-top:5rem;
    }
}
</style>
