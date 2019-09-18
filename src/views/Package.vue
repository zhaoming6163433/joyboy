<template>
    <div class="package">
        <backhome></backhome>
        <div class="list">
            <div class="zhuangban" @click="showsheet"><img :src="clothes"/></div>
            <div class="zhuangban" @click="showsheet"><img :src="cookie"/></div>
        </div>
    </div>
</template>

<script>

import cookie from '@assets/images/cookie.png'
import clothes from '@assets/images/clothes.png'
import backhome from 'components/backhome'
import util from '@/util/util.js'
export default {
    name: 'package',
    props: [],
    data() {
        return {
            cookie:cookie,
            clothes:clothes
        }
    },
    components: {
        backhome
    },
    created() {

    },
    computed: {

    },
    methods: {
        showsheet(){
            util.vueEvent.$emit("sheetVisible",true);
        }
    },
    mounted() {

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.package {
    background: url("../assets/images/cell.png");
    background-size: 100%;
    background-repeat: repeat-y;
    .list{
        .zhuangban{
            width: 6.25rem;
            height: 5.75rem;
            box-sizing: border-box;
            padding-top: 0.7rem;
            text-align: center;
            display: inline-block;
            img{
                width:60%;
            }
        }
    }
}
</style>
