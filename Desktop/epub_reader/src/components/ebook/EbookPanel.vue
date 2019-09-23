<template>
  <transition name='slide-up'>
    <div class="panel">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '标题',
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';

  .panel {
    position: fixed;
    bottom: $tab-bar-height;
    left: 0;
    z-index: 50;
    width: 100%;
    min-height: px2rem(300);
    background-color: #eee;
    box-shadow: 0 0 px2rem(50) #666;

    .title {
      border: 1px solid #ccc;
      width: 100%;
      height: $tab-bar-height;
      @include flex-row-center-center;
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