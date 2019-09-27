<template>
  <transition name="slide-up">
    <div class="menu-wrapper" :class="activeTheme">
      <div class="icon-wrapper" @click="onSideMenuClick">
        <span class="icon-menu"></span>
      </div>
      <div class="icon-wrapper" @click="onProgressClick">
        <span class="icon-progress"></span>
      </div>
      <div class="icon-wrapper" @click="onThemeClick">
        <span class="icon-bright"></span>
      </div>
      <div class="icon-wrapper" @click="onFontClick">
        <span class="icon-A"></span>
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
      onSideMenuClick(){
        console.log('side menu click')
        this.$emit('sidemenuclick')
      },
      onThemeClick(){
        console.log('theme click')
        this.$emit('themeclick')
      },
      onProgressClick(){
        console.log('progress click')
        this.$emit('progressclick')
      },
      onFontClick(){
        console.log('font click')
        this.$emit('fontclick')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';
  @import '../../assets/styles/theme.scss';

  .menu-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: $tab-bar-height;
    width: 100%;
    @include flex-row-between-center;
    // box-shadow: 0 0 px2rem(50) #aaa;
    // background-color: #eee;
    font-size: px2rem(60);
  }

  .icon-wrapper {
    flex: 1;
    width: $tab-bar-height;
    height: $tab-bar-height;
    @include flex-row-center-center;
  }

  .slide-up-enter,
  .slide-up-leave-to {
    bottom: -100%;
  }

  .slide-up-enter-active,
  .slide-up-leave-active{
    transition: bottom .3s ease-in-out;
  }

  .slide-up-leave,
  .slide-up-enter-to{
    bottom: 0;
  }
</style>