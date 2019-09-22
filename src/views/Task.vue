<template>
    <div class="task">
        <backhome></backhome>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore">
            <ul class="taskul">
                <li v-for="(item,index) in list" :key="index"><span>{{ item.title }}</span><span>{{ item.state }}</span></li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>

import backhome from 'components/backhome'
import util from '@/util/util.js'
import { mapMutations,mapState } from 'vuex'
export default {
    name: 'task',
    props: [],
    data() {
        return {
            list:[
                {title:"完成一笔白条支付",state:"未完成"},
                {title:"使用一次京东闪付",state:"未完成"},
                {title:"完成一次金条借钱",state:"未完成"},
                {title:"购买一笔理财产品",state:"未完成"},
                {title:"完成一次朋友邀请",state:"未完成"}
            ]
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
            
        ]),
        loadTop(){

        },
        loadBottom(){

        }
    },
    methods: {
        
    },
    mounted() {
        
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.task {
    .taskul{
        li{
            height: 2rem;
            line-height: 2rem;
            text-align: left;
            background-color: #fff;
            border-top: 1px solid #eee;
            span:nth-child(1){
                font-size: .8rem;
                margin-left: 1rem;
            }
            span:nth-child(2){
                font-size: 0.6rem;
                margin-left: 1rem;
                color: $gray2;
                position: absolute;
                right: 1rem;
            }
        }
    }
}
</style>
