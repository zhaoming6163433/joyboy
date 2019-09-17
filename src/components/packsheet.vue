<template>
    <div class="packsheet">
        <mt-actionsheet :actions="sellist" v-model="sheetVisible" cancelText="取消">
        </mt-actionsheet>
    </div>
</template>

<script>

import util from '@/util/util.js'
export default {
  name: 'packsheet',
  props : [],
  data () {
    return {
        sheetVisible:false,
        sellist:[
            {name: '使用',method: this.cancelfn,id:1},
            {name: '丢弃',method: this.cancelfn,id:2},
        ]
    }
  },
  components: {
      
  },
  created(){
    
  },
  computed: {
      
  },
  methods : {
    cancelfn(item){
        this.sheetVisible = false;
        console.log(item)
    },
  },
  mounted(){
        util.vueEvent.$off("sheetVisible");
        util.vueEvent.$on("sheetVisible", (flag)=>{
            this.sheetVisible = flag;
        });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.packsheet{
  
}
    
</style>
