<template>
  <transition name="slide-in">
    <div class="sideMenu">
      <van-search placeholder="请输入搜索关键词" v-model="keyword" clearable shape="round"/>
    </div>
  </transition>
</template>

<script>
  export default {
    data(){
      return {
        keyword: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';

  .sideMenu {
    width: 80vw;
    height: 100vh;
    box-shadow: 0 0 px2rem(20) #666;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    background-color: #eee;
  }

  .slide-in-enter,
  .slide-in-leave-to {
    left: -100%;
  }

  .slide-in-enter-active,
  .slide-in-leave-active {
    transition: left .3s ease-in-out;
  }

  .slide-in-leave,
  .slide-in-enter-to {
    left: 0;
  }
</style>