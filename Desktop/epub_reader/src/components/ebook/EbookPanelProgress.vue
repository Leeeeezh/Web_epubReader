<template>
  <div class="progress" :class="activeTheme">
    <div class="current">{{progress}}%</div>
    <div class="container">
      <span class="min preview">0%</span>
      <div class="sliderWrap">
        <van-slider class="slider" v-model="progress" :min="0" :max="100" :active-color="activeColor" :inactive-color="inactiveColor"/>
      </div>
      <span class="max preview">100%</span>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        progress: 0
      }
    },
    computed: {
      ...mapGetters(['activeTheme']),
      activeColor(){
        switch(this.activeTheme){
          case 'default':
            return '#333'
          case 'dark':
            return '#777'
          case 'breeze':
            return '#328368'
        }
      },
      inactiveColor(){
        switch(this.activeTheme){
          case 'default':
            return '#ddd'
          case 'dark':
            return '#222'
          case 'breeze':
            return '#6cb89e'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';
  .progress{
    @include flex-column-center-center;
  }
  .container {
    width: 96vw;
    @include flex-row-between-center;

    .preview {
      width: 40px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: px2rem(30);
    }

    .sliderWrap {
      flex: 1;
      padding: 0 px2rem(40);
    }
  }
</style>