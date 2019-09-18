<template>
    <div class="dogtext" v-show="showdogtext">
        <div class="textimg">
            <img :src="dogtextimg" />
            <div class="textdivout">
                <div class="textdiv" v-for="(item,index) in list" :key="index" :style="{ width: item + '%' }"></div>
            </div>
        </div>
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
                },1000)
            }
       }
    },
    mounted() {
        util.vueEvent.$off("showdogtext")
        util.vueEvent.$on("showdogtext", (flag)=>{
            this.showdogtext = flag;
            this.startimg();
        });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @keyframes textstyleh
    {
        0%   {height: 7rem;}
        20%  {height: 6rem;}
        40%  {height: 5rem;}
        60%  {height: 4rem;}
        80%  {height: 3rem;}
        100% {height: 0rem;}
    }

    .dogtext>.textstyle >div{
        animation: textstyleh 6s;
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
    background-color: $buleback;
    text-align:center;
    .textimg{
        width:16rem;
        margin:0 auto;
        margin-top: 2rem;
        height: 15.8rem;
        .textdivout{
            border: 1px solid $bordercolor;
            position:absolute;
            width: 16rem;
            top: 2rem;
            .textdiv{
                background:$buleback;
                height: 0.58rem;
                float: right;
                clear: both;
                width:100%;
            }
        }
    }
    
    .textstyle{
        position: relative;
        width: 14rem;
        border-radius: 10px;
        background-color: $buleback;
        padding: 1rem;
        color:#fff;
        border:1px solid $bordercolor;
        margin: 0 auto;
        color:$text_c;
        margin-top:1rem;
        font-size:1rem;
        >div{
            position: absolute;
            left: 0;
            width: 100%;
            height: 0rem;
            bottom:0;
            background-color: $buleback;
        }
    }
}
</style>
