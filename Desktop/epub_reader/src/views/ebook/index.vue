<template>
  <div class="ebook">
    <router-link to="/"></router-link>
    <EbookReader />
  </div>
</template>
<script>
  import EbookReader from '@/components/ebook/EbookReader'
  export default {
    data: () => {
      return {

      }
    },
    components: {
      EbookReader
    },
  }
</script>
<style lang="scss" scoped>

</style>