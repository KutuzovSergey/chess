<template>
  <div class="game">
      <div class="frame">
          <div class="game-wrapper">
            <div class="game-container">
              <ul class="game-pane game-pane_left">
                <li class="game-pane-cell"><span class="game-pane-cell__text">8</span></li>
                <li class="game-pane-cell"><span class="game-pane-cell__text">7</span></li>
                <li class="game-pane-cell"><span class="game-pane-cell__text">6</span></li>
                <li class="game-pane-cell"><span class="game-pane-cell__text">5</span></li>
                <li class="game-pane-cell"><span class="game-pane-cell__text">4</span></li>
                <li class="game-pane-cell"><span class="game-pane-cell__text">3</span></li>
                <li class="game-pane-cell"><span class="game-pane-cell__text">2</span></li>
                <li class="game-pane-cell"><span class="game-pane-cell__text">1</span></li>
              </ul>
              <div class="game-laying-field">
                <RowSquaresComponentsL />
                <RowSquaresComponentsR />
                <RowSquaresComponentsL />
                <RowSquaresComponentsR />
                <RowSquaresComponentsL />
                <RowSquaresComponentsR />
                <RowSquaresComponentsL />
                <RowSquaresComponentsR />
              </div>
            </div>
            <ul class="game-pane game-pane_bottom">
              <li class="game-pane-cell game-pane-cell_bottom"><span class="game-pane-cell__text"></span></li>
              <li class="game-pane-cell game-pane-cell_bottom"><span class="game-pane-cell__text">A</span></li>
              <li class="game-pane-cell game-pane-cell_bottom"><span class="game-pane-cell__text">B</span></li>
              <li class="game-pane-cell game-pane-cell_bottom"><span class="game-pane-cell__text">C</span></li>
              <li class="game-pane-cell game-pane-cell_bottom"><span class="game-pane-cell__text">D</span></li>
              <li class="game-pane-cell game-pane-cell_bottom"><span class="game-pane-cell__text">E</span></li>
              <li class="game-pane-cell game-pane-cell_bottom"><span class="game-pane-cell__text">F</span></li>
              <li class="game-pane-cell game-pane-cell_bottom"><span class="game-pane-cell__text">G</span></li>
              <li class="game-pane-cell game-pane-cell_bottom"><span class="game-pane-cell__text">H</span></li>
            </ul>
          </div>

      </div>
  </div>
</template>

<script>
import RowSquaresComponentsL from "../components/Game/RowSquaresComponentsL.vue"
import RowSquaresComponentsR from "../components/Game/RowSquaresComponentsR.vue"

export default {
  name: 'HomeView',
  components: {
    RowSquaresComponentsL,
    RowSquaresComponentsR
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/fonts_rubik.scss';
@import '@/scss/_mixins.scss';
@import '@/scss/variables.scss';

.game{
  @include bloockContent(100%, auto, $background_color-6, 0);

  .frame{
    @include bloockContent($size_playing_wrapper, $size_playing_wrapper, $color_frame_game, 0);
    margin: auto;
    display: flex;
  }

  &-wrapper{
    @include bloockContent($size_playing_field, $size_playing_field, $color_board_white, 0);
    margin: auto;
  }

  &-container{
    display: flex;
  }

  &-pane_left{
    width: 50px;
    height: 1120px;
    display: grid;
    border: 1px solid $background_color-2;
  }

  &-laying-field{
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    width: 1118px;
    border: 2px solid $background_color-1;
  }

  &-pane_bottom{
    display: grid;
    height: 50px;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  &-pane{
    border: 2px solid $background_color-2;
    padding: 0;
    margin: 0;
  }

  &-pane-cell{
    list-style: none;
    display: flex;
    border: 1px solid $background_color-2;
  }

  &-pane-cell__text{
    margin: auto;
    @include textContent($cell_text_color, $font_size-2, uppercase, 700, $font_rubik);
  }

  &-pane-cell_bottom{
    display: flex;
  }
}
</style>