<template>
  <div class="fontSize">
    <div class="current">{{fontSize}}</div>
    <div class="container">
      <span class="min preview">A</span>
      <div class="slider">
        <van-slider v-model="fontSize" :min="14" :max="30" :step="2" active-color="#333" @change="onFontSizeChange($event)"/>
      </div>
      <span class="max preview">A</span>
    </div>
    <div class="btn" @click="onBtnClick">字体样式&gt;</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fontSize: 20
      }
    },
    mounted(){
      this.fontSize = +localStorage.getItem('fontSize')
    },
    methods: {
      onBtnClick() {
        this.$emit('btnclick')
      },
      onFontSizeChange(f){
        this.$emit('fontsizechange',f)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';

  .fontSize {
    box-sizing: border-box;
    padding: px2rem(20);
    @include flex-column-around-center;
    height: px2rem(300);
  }

  .container {
    width: 96vw;
    @include flex-row-between-center;

    .preview {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }

    .min {
      font-size: 14px;
    }

    .max {
      font-size: 30px;
    }

    .slider {
      flex: 1;
      padding: 0 px2rem(40);
    }
  }

  .btn {
    font-size: px2rem(18);
    color: #666;
    border: 1px solid #ccc;
    border-radius: px2rem(14);
    padding: px2rem(10);
  }
</style>