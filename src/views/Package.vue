<template>
    <div class="package">
        <backhome></backhome>
        <div class="list">
            <div class="zhuangban" @click="showsheet(item.id)" v-for="(item,index) in packagelist" :key="index">
                <img src="@assets/images/clothes.png" v-show="item.id==1"/>
                <img src="@assets/images/cookie.png" v-show="item.id==2"/>
            </div>
        </div>
    </div>
</template>

<script>

import backhome from 'components/backhome'
import util from '@/util/util.js'
import { mapMutations,mapState } from 'vuex'
export default {
    name: 'package',
    props: [],
    data() {
        return {
            
        }
    },
    watch:{
        packagelist(val){
            console.log(val);
        },
    },
    components: {
        backhome
    },
    created() {

    },
    computed: {
        ...mapState([
            'packagelist'
        ])
    },
    methods: {
        showsheet(val){
            util.vueEvent.$emit("sheetVisible",{selnum:val,flag:true});
        }
    },
    mounted() {
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.package {
    margin: 1rem auto;
    background: url("../assets/images/cell.png");
    background-size: 100%;
    background-repeat: repeat-y;
    width: 16.75rem;
    box-sizing: border-box;
    bottom: 4.5rem;
    .list{
        margin-left: 0.6rem;
        .zhuangban{
            width: 3rem;
            box-sizing: border-box;
            margin: 0.4rem 0.45rem;
            text-align: center;
            display: inline-block;
        }
    }
}
</style>
