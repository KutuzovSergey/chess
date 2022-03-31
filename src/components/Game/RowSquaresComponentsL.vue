<template>
    <ul class="playing-field__line">
        <li class="playing-field__cage playing-field__cage_white"></li>
        <li class="playing-field__cage playing-field__cage_black"></li>
        <li class="playing-field__cage playing-field__cage_white"></li>
        <li class="playing-field__cage playing-field__cage_black"></li>
        <li class="playing-field__cage playing-field__cage_white"></li>
        <li class="playing-field__cage playing-field__cage_black"></li>
        <li class="playing-field__cage playing-field__cage_white"></li>
        <li class="playing-field__cage playing-field__cage_black">
            <img src="@/assets/chessmans/white/5.png" alt="">
        </li>
    </ul>
</template>

<script>


export default {
  name: 'RowSquaresComponents',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/fonts_rubik.scss';
@import '@/scss/_mixins.scss';
@import '@/scss/variables.scss';

.playing-field__line{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    padding: 0;
    margin: 0;
}

.playing-field__cage{
    list-style: none;
    height: 100%;
    display: flex;
    border: 2px solid $background_color-2;
}
.playing-field__cage>img{
    widows: 100%;
    height: auto;
    margin: auto;
}

.playing-field__cage_white{
    background-color: $color_board_white;
}

.playing-field__cage_black{
    background-color: $color_board_black;
}
</style>