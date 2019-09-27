<template>
  <transition name="slide-in">
    <div class="sideMenu" :class="activeTheme">
      <van-search placeholder="请输入搜索关键词" v-model="keyword" clearable shape="round" :background="searchBgcolor"/>
    </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        keyword: ''
      }
    },
    computed: {
      ...mapGetters(['activeTheme']),
      searchBgcolor(){
        switch(this.activeTheme){
          case 'default':
            return '#ccc'
          case 'dark':
            return '#333'
          case 'breeze':
            return '#83b484'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';
  @import '../../assets/styles/theme.scss';

  .sideMenu {
    width: 80vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
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