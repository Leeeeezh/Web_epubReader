<template>
  <div class="theme" @click.stop="onThemeChange($event)">
    <div :class="[theme=='default'?'active':'']" class="themeOption defaultTheme" data-theme="default">
      <span data-theme="default">Default</span>
    </div>
    <div :class="[theme=='dark'?'active':'']" class="themeOption darkTheme" data-theme="dark">
      <span data-theme="dark">Dark</span>
    </div>
    <div :class="[theme=='breeze'?'active':'']" class="themeOption breezeTheme" data-theme="breeze">
      <span data-theme="breeze">Breeze</span>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed:{
      ...mapGetters(['activeTheme'])
    },
    props: {
      theme: {
        type: String,
        value: 'default'
      }
    },
    methods: {
      ...mapActions(['setActiveTheme']),
      onThemeChange(evt) {
        let theme = evt.target.dataset.theme
        if (!theme) {
          return
        }
        console.log('theme changing===>', theme)
        localStorage.setItem('theme', theme)
        this.setActiveTheme(theme)
        this.$emit('themechange', theme)
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/global.scss";
  @import "../../assets/styles/theme.scss";

  .active {
    font-size: px2rem(50);
    font-weight: bold;
  }

  .theme {
    width: 100%;
    padding: px2rem(40) 0;
    @include flex-row-around-center;
  }

  .themeOption {
    box-sizing: border;
    border: px2rem(10) solid rgba(255, 255, 255, .5);
    // box-shadow: 0 0 10px #ddd;
    width: 26vw;
    height: px2rem(160);
    @include flex-row-center-center;
    transition: font-size .3s ease-in-out;
  }

  .defaultTheme {
    background-color: #ddd;
    span {
      color: #333;
    }
  }

  .darkTheme {
    background-color: #111;
    span {
      color: #888;
    }
  }

  .breezeTheme {
    background-color: #a5d6a7;
    span {
      color: #2f8166;
    }
  }
</style>