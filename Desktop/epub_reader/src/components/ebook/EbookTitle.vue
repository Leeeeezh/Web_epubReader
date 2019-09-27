<template>
  <transition name="slide-down">
    <div class="title-wrapper" :class="activeTheme">
      <div class="left">
        <div class="icon-wrapper">
          <router-link to="/store" tag="div">
            <span class="icon-back"></span>
          </router-link>
        </div>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['activeTheme'])
    },
    methods: {
      navBack(){
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';
  @import "../../assets/styles/theme.scss";

  .title-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: $tab-bar-height;
    width: 100%;
    @include flex-row-between-center;
    font-size: px2rem(60);
  }
  .right {
    @include flex-row-between-center;
  }
  .icon-wrapper {
    width: $tab-bar-height;
    height: $tab-bar-height;
    @include flex-row-center-center;
  }
  .icon-wrapper:active{
    background-color: #ddd;
  }
  .slide-down-enter,
  .slide-down-leave-to {
    top: -100%;
  }
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: top .3s ease-in-out;
  }
  .slide-down-leave,
  .slide-down-enter-to {
    top: 0;
  }
</style>