<template>
  <transition name='slide-up'>
    <div class="panel" :class="activeTheme">
      <div class="title">
        <span>{{title}}</span>
        <span class="icon-close" @click="onClose"></span>
      </div>
      <div class="content">
        <slot name="content"></slot>
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
    props: {
      title: {
        type: String,
        default: '标题',
      }
    },
    methods: {
      onClose(){
        console.log('closing panel')
        this.$emit('panelclose')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';
  @import "../../assets/styles/theme.scss";

  .panel {
    position: fixed;
    bottom: $tab-bar-height;
    left: 0;
    z-index: 50;
    width: 100%;
    min-height: px2rem(300);

    .title {
      box-sizing: border-box;
      width: 100%;
      height: $tab-bar-height;
      @include flex-row-center-center;
      position: relative;
      font-weight: bold;

      .icon-close{
        position: absolute;
        right: 0;
        top:50%;
        transform: translateY(-50%);
        font-size: px2rem(60);
        padding:px2rem(30);
      }
    }

    .content {
      min-height: px2rem(200);
      @include flex-row-center-center;
    }
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
    bottom: $tab-bar-height;
  }
</style>