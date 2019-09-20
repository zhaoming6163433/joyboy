<template>
    <div class="preloadimg">
        
    </div>
</template>

<script>

import joy_turnaround from '@assets/images/joy-turnaround.gif'
import cell from '@assets/images/cell.png'
import dogtext from '@assets/images/dogtext.png'
import joy_cook_head from '@assets/images/joy_cook_head.png'
import joy_still_new from '@assets/images/joy_still_new.png'
import joy_angry from '@assets/images/joy-angry.gif'
import shark from '@assets/images/shark.png'
import cheers from '@assets/images/photos-cheers.gif'
import hide from '@assets/images/photos-hide.gif'

export default {
    name: 'preloadimg',
    props: [],
    data() {
        return {
            count: 0
        }
    },
    components: {

    },
    created() {

    },
    computed: {

    },
    methods: {
        preload: function () {
            let imgs = [
                joy_turnaround,
                cell,
                dogtext,
                joy_cook_head,
                joy_still_new,
                joy_angry,
                shark,
                cheers,
                hide
            ]

            for (let img of imgs) {
                let image = new Image()
                image.src = img
                image.onload = () => {
                    this.count++
                    console.log("图片加载完数量"+this.count)
                }
            }
        }
    },
    mounted() {
        this.preload();
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .preloadimg{
        display: none;
    }
</style>
