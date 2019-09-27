<template>
  <div :class="activeTheme" class="fontFamily" @click="onFontFamilyChange($event)">
    <div class="item cabin" :class="[fontFamily=='cabin'?'active':'']" data-font_family="cabin">
      Cabin
      <span v-show="fontFamily=='cabin'" class="icon-check"></span>
    </div>
    <div class="item daysOne" :class="[fontFamily=='daysOne'?'active':'']" data-font_family="daysOne">
      Days One
      <span v-show="fontFamily=='daysOne'" class="icon-check"></span>
    </div>
    <div class="item montserrat" :class="[fontFamily=='montserrat'?'active':'']" data-font_family="montserrat">
      Montserrat
      <span v-show="fontFamily=='montserrat'" class="icon-check"></span>
    </div>
    <div class="item tangerine" :class="[fontFamily=='tangerine'?'active':'']" data-font_family="tangerine">
      Tangerine
      <span v-show="fontFamily=='tangerine'" class="icon-check"></span>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['activeTheme'])
    },
    props: {
      fontFamily: {
        type: String,
        value: 'cabin'
      }
    },
    methods: {
      onFontFamilyChange(evt) {
        const fontFamily = evt.target.dataset.font_family
        localStorage.setItem('fontFamily', fontFamily)
        this.$emit('fontfamilychange', fontFamily)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';
  @import '../../assets/styles/theme.scss';



  .fontFamily {
    width: 100%;
  }

  .item {
    width: 100%;
    height: px2rem(100);
    line-height: px2rem(100);
    box-sizing: border-box;
    padding-left: px2rem(20);
  }

  .cabin {
    font-family: cabin;
  }

  .daysOne {
    font-family: daysOne;
  }

  .montserrat {
    font-family: montserrat;
  }

  .tangerine {
    font-family: tangerine;
  }

  
</style>