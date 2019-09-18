<template>
    <div class="backhome" @click="gobackhome">
        <
    </div>
</template>

<script>

import util from '@/util/util.js'
export default {
  name: 'backhome',
  props : [],
  data () {
    return {
        
    }
  },
  components: {
      
  },
  created(){
    
  },
  computed: {
      
  },
  methods : {
   gobackhome(){
       this.$router.push({"name":"homechild"})
   }
  },
  mounted(){
       
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.backhome{
    height: 1rem;
    background-size: cover;
    width: 1rem;
    background-color: #000;
    border-radius: 100%;
    position: absolute;
    top:0.2rem;
    left:0.2rem;
    opacity: 0.2;
    color:#fff;
    font-size:0.8rem;
    font-weight: bold;
    text-align: center;
}
    
</style>
