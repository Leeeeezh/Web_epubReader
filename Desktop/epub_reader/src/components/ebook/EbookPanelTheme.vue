<template>
  <div class="theme">
    <div class="themeOption default">
      <span>Default</span>
    </div>
    <div class="themeOption dark">
      <span>Dark</span>
    </div>
    <div class="themeOption breeze">
      <span>Breeze</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global.scss";

.theme {
  width: 100%;
  padding: px2rem(40) 0;
  @include flex-row-around-center;
}

.themeOption {
  box-sizing: border;
  width: 26vw;
  height: px2rem(160);
  @include flex-row-center-center;
}

.default {
  // border: px2rem(10) solid #fff;
  background-color: #ddd;
}

.dark {
  // border: px2rem(10) solid rgba(255,255,255.5);
  background-color: #111;
  span {
    color: white;
  }
}

.breeze {
  // border: px2rem(10) solid rgba(127,255,212, .5);
  background-color: aquamarine;
  span{
    color:rgb(47, 129, 102);
  }
}
</style>