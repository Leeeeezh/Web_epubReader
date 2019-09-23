<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  document.addEventListener("load", () => {
    const html = document.querySelector("html")
    const fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + "px"
  })
  export default {
    data: () => {
      return {
        transitionName: ''
      }
    },
    watch: {
      $route(to, from) {
        if (to.name == 'store') {
          console.log('slide-out')
          this.transitionName = 'slide-out'
        } else {
          console.log('slide-in')
          this.transitionName = 'slide-in'
        }
      }
    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .slide-in-enter-to,
  .slide-in-leave {
    transform: translateX(0);
  }

  .slide-in-enter-active,
  .slide-in-leave-active {
    transition: all .3s ease-in-out;
  }

  .slide-in-leave-to,
  .slide-in-enter {
    transform: translateX(100%);
  }

  .slide-out-enter-to,
  .slide-out-leave {
    transform: translateX(0);
  }

  .slide-out-enter-active,
  .slide-out-leave-active {
    transition: all .3s ease-in-out;
  }

  .slide-out-leave-to,
  .slide-out-enter {
    transform: translateX(-100%);
  }
</style>