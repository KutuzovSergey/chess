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
                <ul class="playing-field__line">
                  <li class="playing-field__cage playing-field__cage_white" id="a8" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="b8" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="c8" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="d8" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="e8" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="f8" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="g8" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="h8" @click="showMoves"></li>
                </ul>
                <ul class="playing-field__line">
                  <li class="playing-field__cage playing-field__cage_black" id="a7" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="b7" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="c7" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="d7" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="e7" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="f7" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="g7" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="h7" @click="showMoves"></li>
                </ul>
                <ul class="playing-field__line">
                  <li class="playing-field__cage playing-field__cage_white" id="a6" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="b6" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="c6" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="d6" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="e6" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="f6" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="g6" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="h6" @click="showMoves"></li>
                </ul>
                <ul class="playing-field__line">
                  <li class="playing-field__cage playing-field__cage_black" id="a5" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="b5" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="c5" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="d5" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="e5" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="f5" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="g5" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="h5" @click="showMoves"></li>
                </ul>
                <ul class="playing-field__line">
                  <li class="playing-field__cage playing-field__cage_white" id="a4" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="b4" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="c4" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="d4" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="e4" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="f4" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="g4" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="h4" @click="showMoves"></li>
                </ul>
                <ul class="playing-field__line">
                  <li class="playing-field__cage playing-field__cage_black" id="a3" @click="showMoves">
                    <img :src="testImage" alt="" class="test">
                  </li>
                  <li class="playing-field__cage playing-field__cage_white" id="b3" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="c3" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="d3" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="e3" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="f3" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="g3" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="h3" @click="showMoves"></li>
                </ul>
                <ul class="playing-field__line">
                  <li class="playing-field__cage playing-field__cage_white" id="a2" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="b2" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="c2" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="d2" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="e2" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="f2" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="g2" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="h2" @click="showMoves"></li>
                </ul>
                <ul class="playing-field__line">
                  <li class="playing-field__cage playing-field__cage_black" id="a1" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="b1" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="c1" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="d1" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="e1" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="f1" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_black" id="g1" @click="showMoves"></li>
                  <li class="playing-field__cage playing-field__cage_white" id="h1" @click="showMoves"></li>
                </ul>
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

export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      map: null,
      figures: [],
      figuresSrcWhite: '../assets/chessmans/',
    }
  },
  created(){
    this.map = this.$store.getters.MAP_FIELD;
  },
  mounted(){
    const playing_cage = document.querySelectorAll('.playing-field__cage');

    class Figure{
      constructor(options){
        this.index = options.index
        this.coordinates = options.coordinates
        this.type = options.type
        this.img_src = options.img_src
      }
      createShape(){
        const cage = document.querySelector(`#${this.coordinates}`);
        const img = document.createElement('img');
        img.classList.add('game__figure');
        img.setAttribute('alt', this.index);
        img.setAttribute('src', require(`${this.img_src}${this.type}/${this.index}.png`));
        cage.append(img);
      }
      testImg(){
        return require(`${this.img_src}${this.type}/${this.index}.png`);
      }
    }

    for (let i = 0; i < playing_cage.length; i++) {
      let playing_cage_id = playing_cage[i].id;

      if (playing_cage_id in this.map) {
        const pawn = new Figure({
          index: this.map[playing_cage_id].name,
          coordinates: playing_cage_id,
          type: this.map[playing_cage_id].color,
          img_src: this.figuresSrcWhite
        });

        this.figures.push(pawn);
      }
    }

    // this.figures.forEach( item => item.createShape());
    // console.log(this.figures[1].type);
  },
  computed:{
    testImage(){
      console.log(this.figures[1]);
      return require('../assets/chessmans/white/pawn.png');
    }
  },
  methods: {
    // creatingShapes: function(){
    //   const playing_cage = document.querySelectorAll('.playing-field__cage');

    //   class Figure{
    //     constructor(options){
    //       this.index = options.index
    //       this.coordinates = options.coordinates
    //       this.type = options.type
    //       this.img_src = options.img_src
    //     }
    //     createShape(){
    //       const cage = document.querySelector(`#${this.coordinates}`);
    //       const img = document.createElement('img');
    //       img.classList.add('game__figure');
    //       img.setAttribute('alt', this.index);
    //       img.setAttribute('src', require(`${this.img_src}${this.type}/${this.index}.png`));
    //       cage.append(img);
    //     }
    //     testImg(){
    //       return require(`${this.img_src}${this.type}/${this.index}.png`);
    //     }
    //   }

    //   for (let i = 0; i < playing_cage.length; i++) {
    //     let playing_cage_id = playing_cage[i].id;

    //     if (playing_cage_id in this.map) {
    //       const pawn = new Figure({
    //         index: this.map[playing_cage_id].name,
    //         coordinates: playing_cage_id,
    //         type: this.map[playing_cage_id].color,
    //         img_src: this.figuresSrcWhite
    //       });

    //       this.figures.push(pawn);
    //     }
    //   }
    // },
    showMoves: function(event){
        console.log(event.target.id);
    }
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
    margin: 210px auto;
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
  &__figure{
    width: 100%;
    height: auto;
  }
}
</style>