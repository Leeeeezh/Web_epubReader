<template>
  <div class="progress">
    <div class="current">{{progress}}%</div>
    <div class="container">
      <span class="min preview">0%</span>
      <div class="slider">
        <van-slider v-model="progress" :min="0" :max="100" active-color="#333" />
      </div>
      <span class="max preview">100%</span>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        progress: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';
  .progress{
    @include flex-column-center-center;
  }
  .container {
    width: 96vw;
    @include flex-row-between-center;

    .preview {
      width: 40px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: px2rem(30);
    }

    .slider {
      flex: 1;
      padding: 0 px2rem(40);
    }
  }
</style>