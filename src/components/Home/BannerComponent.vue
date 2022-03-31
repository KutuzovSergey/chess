<template>
	<div class="banner">
        <div class="banner-block banner-block_active">
            <div class="banner-block__image">
                <img src="@/assets/banner/img_1.jpg" alt="banner image" class="banner__images">
            </div>
        </div>
        <div class="banner-block">
            <div class="banner-block__image">
                <img src="@/assets/banner/img_2.jpeg" alt="banner image" class="banner__images">
            </div>
        </div>
        <div class="banner-block">
            <div class="banner-block__image">
                <img src="@/assets/banner/img_3.jpg" alt="banner image" class="banner__images">
            </div>
        </div>
	</div>
</template>

<script>
export default {
  name: 'BannerComponent',
  props: {
    msg: String
  },
  data() {
    return {
      index: 0,
      numberSeconds: 9000
    }
  },
  methods: {
    switchForward: function () {
      const slider_block = document.querySelectorAll('.banner-block');

      const movementActive = (s) =>{
        for (let i = 0; i < slider_block.length; i++) {
          slider_block[i].classList.remove('banner-block_active');
        }
        slider_block[s].classList.add('banner-block_active');
      }

      const next = () => {
        if (this.index == slider_block.length - 1){
          this.index = 0;
          movementActive(this.index);
        } else {
          this.index++;
          movementActive(this.index);
        }
      }
      next();
    }
  },
  mounted() {
    setInterval(this.switchForward, this.numberSeconds);
  }

}
</script>

<style scoped lang="scss">
// @import '@/scss/fonts_rubik.scss';
// @import '@/scss/_mixins.scss';
// @import '@/scss/variables.scss';

.banner{
  width: 100%;
  height: auto;
  background-color: #000;

  &-block{
    width: 100%;
    height: auto;
    display: none;
  }

  &-block_active{
     display: block;
  }

  &-block__image{
    width: 100%;
    height: auto;
  }

  &__images{
    width: 100%;
    height: auto;
  }
}
</style>