<template>
  <div class="ebook">
    <EbookReader />
  </div>
</template>
<script>
  import EbookReader from '@/components/ebook/EbookReader'
  import EbookPanel from '@/components/ebook/EbookPanel'
  export default {
    data: () => {
      return {
      }
    },
    components: {
      EbookReader,
      EbookPanel
    },
  }
</script>
<style lang="scss" scoped>

</style>