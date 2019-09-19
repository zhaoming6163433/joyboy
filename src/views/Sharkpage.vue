<template>
    <div class="sharkpage" @click="sharkfn">
        <backhome></backhome>
        <div class="sharktext">摇一摇！与同时摇晃手机的Joy萌友合影</div>
        <div :class="`sharkimg animated ${swing}`"><img src="@assets/images/shark.png"/></div>
    </div>
</template>

<script>

import util from '@/util/util.js'
import backhome from 'components/backhome'
import { mapMutations,mapState } from 'vuex'
import { setTimeout } from 'timers';
export default {
    name: 'sharkpage',
    props: [],
    data() {
        return {
            swing:"",
            sharkflag:true
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
           
        ])
    },
    methods: {
       sharkfn(){
           if(this.sharkflag){
               this.sharkflag = false;
               this.swing = "swing";
               setTimeout(()=> {
                   this.swing = "";
                   this.sharkflag = true;
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
        transform-origin: center center;
    }
    @keyframes swing
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
}
</style>
