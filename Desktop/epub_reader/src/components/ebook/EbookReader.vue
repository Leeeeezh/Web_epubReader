<template>
  <div class="ebook-reader">
    <EbookTitle v-show="isTitleAndMenuShow" />
    <EbookMenu v-show="isTitleAndMenuShow" @progressclick="showProgressPanel" @fontclick="showFontSizePanel"
      @themeclick="showThemePanel" @sidemenuclick="showSideMenu" />
    <EbookPanel v-show="isPanelShow" :title="activatedPanelTitle">
      <EbookPanelFontFamily v-show="activatedPanelTitle=='字体'" slot="content" />
      <EbookPanelFontSize v-show="activatedPanelTitle=='字号'" slot="content" @btnclick="showFontFamilyPanel" @fontsizechange="onFontSizeChange($event)"/>
      <EbookPanelTheme v-show="activatedPanelTitle=='主题'" slot="content" />
      <EbookPanelProgress v-show="activatedPanelTitle=='阅读进度'" slot="content" />
    </EbookPanel>
    <EbookSideMenu v-show="isSideMenuShow" />
    <transition name="fade">
      <div class="masked" v-show="isSideMenuShow" @click="hideSideMenu"></div>
    </transition>
    <div id="read"></div>

  </div>
</template>
<script>
  import Epub from 'epubjs'
  import EbookMenu from './EbookMenu'
  import EbookTitle from './EbookTitle'
  import EbookPanel from './EbookPanel'
  import EbookPanelFontSize from './EbookPanelFontSize'
  import EbookPanelFontFamily from './EbookPanelFontFamily'
  import EbookPanelTheme from './EbookPanelTheme'
  import EbookPanelProgress from './EbookPanelProgress'
  import EbookSideMenu from './EbookSideMenu'
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    data: () => {
      return {
        isTitleAndMenuShow: false,
        isPanelShow: false,
        isSideMenuShow: false,
        activatedPanelTitle: ''
      }
    },
    computed: {
      ...mapGetters(['fileName'])
    },
    components: {
      EbookTitle,
      EbookMenu,
      EbookPanel,
      EbookPanelFontSize,
      EbookPanelFontFamily,
      EbookPanelTheme,
      EbookPanelProgress,
      EbookSideMenu
    },
    methods: {
      ...mapActions(['setFileName','setFontSize']),
      onFontSizeChange(f){
        this.rendition.themes.fontSize(`${f}px`)
        // this.setFontSize(f)
        localStorage.setItem('fontSize',f)
      },
      hideSideMenu() {
        this.isSideMenuShow = false
      },
      showSideMenu() {
        this.isPanelShow = false
        this.isSideMenuShow = true
      },
      showFontSizePanel() {
        console.log('show font panel')
        this.activatedPanelTitle = '字号'
        this.isPanelShow = true
      },
      showFontFamilyPanel() {
        console.log('show font family panel')
        this.activatedPanelTitle = '字体'
      },
      showThemePanel() {
        console.log('show theme panel')
        this.activatedPanelTitle = "主题"
        this.isPanelShow = true
      },
      showProgressPanel() {
        console.log('show progress panel')
        this.activatedPanelTitle = "阅读进度"
        this.isPanelShow = true
      },
      prevPage() {
        console.log('previous page')
        if (this.rendition) {
          this.rendition.prev()
        }
      },
      nextPage() {
        console.log('next page')
        if (this.rendition) {
          this.rendition.next()
        }
      },
      toggleTitleAndMenu() {
        console.log('toggleTitleandMenu')
        this.isTitleAndMenuShow = !this.isTitleAndMenuShow
      },
      initGesture() {
        this.rendition.on('touchstart', evt => {

          this.touchStartX = evt.changedTouches[0].clientX
          this.touchStartTime = evt.timeStamp
        })
        this.rendition.on('touchend', evt => {
          const offsetX = evt.changedTouches[0].clientX - this.touchStartX
          const duration = evt.timeStamp - this.touchStartTime
          if (duration < 500 && offsetX > 40) {
            this.isTitleAndMenuShow = false
            this.isPanelShow = false
            this.prevPage()
          } else if (duration < 500 && offsetX < -40) {
            this.isTitleAndMenuShow = false
            this.isPanelShow = false
            this.nextPage()
          } else {
            this.isPanelShow = false
            this.isSideMenuShow = false
            this.toggleTitleAndMenu()
          }
          evt.stopPropagation()
        })
      },
      initFontSize(){
        const fontSize = localStorage.getItem('fontSize')
        if(!fontSize){
          localStorage.setItem('fontSize', 20)
        } else {
          this.setFontSize(+fontSize)
          this.rendition.themes.fontSize(fontSize + 'px')
          this.fontSize = +fontSize
        }
      },
      initEpub(url) {
        this.book = new Epub(url)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight,
        })
        this.rendition.display()
        this.initGesture()
        this.initFontSize()
      },

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
  @import '../../assets/styles/global.scss';
</style>