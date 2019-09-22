<template>
  <div id="app">
    <router-view></router-view>
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
</style>