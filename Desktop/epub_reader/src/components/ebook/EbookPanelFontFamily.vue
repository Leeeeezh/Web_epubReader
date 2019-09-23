<template>
  <div class="fontFamily">
    <div class="item cabin">Cabin</div>
    <div class="item daysOne">Days One</div>
    <div class="item montserrat">Montserrat</div>
    <div class="item tangerine">Tangerine</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  @import '../../assets/styles/global.scss';

  .fontFamily {
    width:100%;

  }
  .item{
    width:100%;
    height: px2rem(100);
    line-height: px2rem(100);
    box-sizing: border-box;
    padding-left: px2rem(20);
  }

  .cabin {
    font-family: cabin;
  }

  .daysOne {
    font-family: daysOne;
  }

  .montserrat {
    font-family: montserrat;
  }

  .tangerine {
    font-family: tangerine;
  }

  .item:active{
    background-color: #ddd;
  }
</style>