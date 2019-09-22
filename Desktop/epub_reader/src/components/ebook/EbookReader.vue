<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>
<script>
  import Epub from 'epubjs'
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  // global.epub = Epub
  export default {
    computed: {
      ...mapGetters(['fileName'])
    },
    methods: {
      ...mapActions(['setFileName']),
      prevPage() {
        if (this.rendition) {
          this.rendition.prev()
        }
      },
      nextPage() {
        if (this.rendition) {
          this.rendition.next()
        }
      },
      toggleTitleAndMenu() {
        console.log('toggleTitleandMenu')
      },
      initEpub(url) {
        this.book = new Epub(url)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight,
        })
        this.rendition.display()
        this.rendition.on('touchstart', evt => {
          this.touchStartX = evt.changedTouches[0].clientX
          this.touchStartTime = evt.timeStamp
        })
        this.rendition.on('touchend', evt => {
          const offsetX = evt.changedTouches[0].clientX - this.touchStartX
          const duration = evt.timeStamp - this.touchStartTime
          if (duration < 500 && offsetX > 40) {
            this.prevPage()
          } else if (duration < 500 && offsetX < -40) {
            this.nextPage()
          } else {
            this.toggleTitleAndMenu()
          }
          evt.stopPropagation()
        })
      },

      initGesture() {

      }
    },
    mounted() {
      setTimeout(() => {
        const baseUrl = 'http://127.0.0.1:8081/epub/'
        const fileName = this.$route.params.fileName.split('|').join('/') + '.epub'
        this.setFileName(fileName)
        const url = baseUrl + fileName
        this.initEpub(url)
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>