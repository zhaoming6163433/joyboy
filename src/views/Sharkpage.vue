<template>
    <div class="sharkpage" @click="sharkfn">
        <backhome></backhome>
        <section v-show="sharkshow">
            <div class="sharktext">摇一摇！与同时摇晃手机的Joy萌友合影</div>
            <div :class="`sharkimg ${swing}`"><img src="@assets/images/shark.png"/></div>
        </section>
        <section v-show="!sharkshow" class="resultimg">
            <img :src="resultimg"/>
        </section>
    </div>
</template>

<script>

import util from '@/util/util.js'
import backhome from 'components/backhome'
import cheer from '@assets/images/photos-cheers.gif'
import photoshide from '@assets/images/photos-hide.gif'
import { mapMutations,mapState } from 'vuex'
import { setTimeout } from 'timers';
export default {
    name: 'sharkpage',
    props: [],
    data() {
        return {
            swing:"",
            resultimg:"",
            sharkshow:true,//展示摇一摇图片
            sharkflag:true,//防止摇一摇未结束继续摇晃
            randoming:[cheer,photoshide]
        }
    },
    watch:{
        
    },
    components: {
        backhome
    },
    created() {

    },
    computed: {
        ...mapState([
           'sharkimglist'
        ])
    },
    methods: {
        ...mapMutations({
            SHARK_IMG_LIST:"SHARK_IMG_LIST"
        }),
       sharkfn(){
           if(this.sharkflag){
               this.sharkflag = false;
               this.swing = "swing";
               setTimeout(()=> {
                   this.swing = "";
                   if(this.sharkimglist[0]!=undefined){
                       this.resultimg = this.randoming[this.sharkimglist[0]];
                       this.sharkimglist.splice(0,1)
                       this.SHARK_IMG_LIST(this.sharkimglist);
                   }else{
                       this.resultimg = this.randoming[Math.floor(Math.random() * (2 - 0) + 0)];
                   }
                   this.sharkflag = true;
                   this.sharkshow = false;
               },2000);
           }
       }
    },
    mounted() {
        util.sharkgravity(this.sharkfn);
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.sharkpage {
    .swing {
        animation-name: myswing;
        transform-origin: center center;
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    @keyframes myswing
    {
        20%  {transform: rotate(50deg);}
        40%  {transform: rotate(-40deg);}
        60%  {transform: rotate(10deg);}
        80%  {transform: rotate(-10deg);}
        100% {transform: rotate(0deg);}
    }
}
</style>
<style lang="scss" scoped>
.sharkpage {
    .sharktext{
        background-color: #4472C4;
        color: #fff;
        width: 13rem;
        height: 4rem;
        font-size: 1rem;
        line-height: 1rem;
        box-sizing: border-box;
        position: relative;
        border-radius: 10px;
        top: 7rem;
        margin: 0 auto;
        text-align: center;
        padding:1rem;
    }
    .sharkimg{
        width:15rem;
        margin:0 auto;
        margin-top:8rem;
    }
    .resultimg{
        text-align:center;
        margin-top:6rem;
        img{
            width:80%;
        }
    }
}
</style>
