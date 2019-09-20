<template>
    <div class="dogtext" v-show="showdogtext">
        <div class="textstyle">
            <div>
            </div>
            <ul>
                <li>正在计算您的偏好信息...10%</li>
                <li>正在评估您的风险信息...30%</li>
                <li>正在查看您的活跃信息...55%</li>
                <li>正在生成您的个性化萌宠...</li>
                <li>100% 完成！</li>
            </ul>
        </div>
        <div class="textimg">
            <img :src="dogtextimg" />
            <div class="textdivout">
                <div class="textdiv" v-for="(item,index) in list" :key="index" :style="{ width: item + '%' }"></div>
            </div>
        </div>
    </div>
</template>

<script>

import util from '@/util/util.js'
import dogtextimg from '@assets/images/dogtext.png'
import { setInterval, setTimeout } from 'timers';
export default {
    name: 'dogtext',
    props: [],
    data() {
        return {
            num:0,
            count:0,
            dogtextimg:dogtextimg,
            textstyleh:"7",
            showdogtext:false,
            list:[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100]
        }
    },
    components: {
        
    },
    created() {

    },
    computed: {

    },
    methods: {
        startimg(){
            if(this.count<27){
                this.num = this.list[this.count];
                if(this.num==0){
                    this.count++;
                }
                if(this.num>0){
                    this.list[this.count] = this.num - 10;
                }

                this.list = [].concat(this.list);
                requestAnimationFrame(this.startimg);
            }else{
                setTimeout(()=>{
                    this.showdogtext = false;
                     util.vueEvent.$emit('firstanimate');
                },1000)
            }
       }
    },
    mounted() {
        util.vueEvent.$off("showdogtext")
        util.vueEvent.$on("showdogtext", (flag)=>{
            this.showdogtext = flag;
            setTimeout(()=>{
                this.startimg();
            },3000);
        });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @keyframes textstyleh
    {
        0%   {height: 5rem;}
        20%  {height: 4rem;}
        40%  {height: 3rem;}
        60%  {height: 2rem;}
        80%  {height: 1rem;}
        100% {height: 0rem;}
    }

    .dogtext>.textstyle >div{
        background:#000;
        animation: textstyleh 3s;
    }
</style>
<style lang="scss" scoped>
.dogtext {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #000000;
    text-align:center;
    .textimg{
        position: relative;
        width: 95%;
        margin: 0 auto;
        height: 15.8rem;
        .textdivout{
            position:absolute;
            width: 100%;
            top: 0;
            .textdiv{
                background:#000;
                height: 2.15vw;
                float: right;
                clear: both;
                width:100%;
            }
        }
    }
    
    .textstyle{
        position: relative;
        width: 14rem;
        background-color: #000000;
        padding: 2%;
        color: #fff;
        color: #02c502;
        margin-top: 1rem;
        font-size: 0.7rem;
        text-align: left;
        >div{
            position: absolute;
            left: 0;
            width: 100%;
            height: 0rem;
            bottom:0;
        }
    }
}
</style>
