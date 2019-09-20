<template>
    <div class="packsheet">
        <mt-actionsheet :actions="sellist" v-model="sheetVisible" cancelText="取消">
        </mt-actionsheet>
    </div>
</template>

<script>

import util from '@/util/util.js'
import { mapMutations,mapState } from 'vuex'
export default {
  name: 'packsheet',
  props : [],
  data () {
    return {
        sheetVisible:false,
        selnum:"",
        sellist:[
            {name: '使用',method: this.usefn},
            {name: '丢弃',method: this.cancelfn},
        ]
    }
  },
  components: {
      
  },
  created(){
    
  },
  computed: {
    ...mapState([
        'packagelist',
    ]),
  },
  methods : {
    ...mapMutations({
        SAVE_PACAKGE_INFO:"SAVE_PACAKGE_INFO",
        SAVE_PACKAGE_LIST:"SAVE_PACKAGE_LIST"
    }),
    usefn(){
        this.SAVE_PACAKGE_INFO(this.selnum);
        if(this.selnum==3){
            window.location.href = "https://pro.m.jd.com/mall/active/4G5xap7fUEzJkqP4ZqmpEc7xtV7v/index.html";
        }else{
            this.$router.push({"name":"homechild"});
        }
    },
    cancelfn(){
        this.packagelist.forEach((item,index) => {
            if (item.id == this.selnum) {
                this.packagelist.splice(index, 1)
            }
        });
        this.SAVE_PACKAGE_LIST(this.packagelist);
    }
  },
  mounted(){
        util.vueEvent.$off("sheetVisible");
        util.vueEvent.$on("sheetVisible", (item)=>{
            this.sheetVisible = item.flag;
            this.selnum = item.selnum;
        });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.packsheet{
  
}
    
</style>
