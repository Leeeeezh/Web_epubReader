<template>
  <div class="ebook-reader">
    <EbookTitle v-show="isTitleAndMenuShow" />
    <EbookMenu v-show="isTitleAndMenuShow" @progressclick="showProgressPanel" @fontclick="showFontSizePanel"
      @themeclick="showThemePanel" @sidemenuclick="showSideMenu" />
    <EbookPanel v-show="isPanelShow" :title="activatedPanelTitle" @panelclose="hidePanel">
      <EbookPanelFontFamily :fontFamily="fontFamily" v-show="activatedPanelTitle=='字体'" slot="content"
        @fontfamilychange="onFontFamilyChange($event)" />
      <EbookPanelFontSize v-show="activatedPanelTitle=='字号'" slot="content" @btnclick="showFontFamilyPanel"
        @fontsizechange="onFontSizeChange($event)" />
      <EbookPanelTheme :theme="theme" v-show="activatedPanelTitle=='主题'" slot="content"
        @themechange="onThemeChange($event)" />
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
        bookThemeList: [{
            name: 'default',
            style: {
              body: {
                'color': '#333',
                'background': '#eee'
              }
            }
          },
          {
            name: 'dark',
            style: {
              body: {
                'color': '#888',
                'background': '#111'
              }
            }
          },
          {
            name: 'breeze',
            style: {
              body: {
                'color': '#2f8166',
                'background': '#a5d6a7'
              }
            }
          },
        ],
        isTitleAndMenuShow: false,
        isPanelShow: false,
        isSideMenuShow: false,
        activatedPanelTitle: '',
        fontFamily: 'cabin',
        theme: 'default'
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
      ...mapActions(['setFileName', 'setFontSize', 'setActiveTheme']),
      onFontFamilyChange(f) {
        console.log('=======>', f)
        this.fontFamily = f
        this.rendition.themes.font(f)
      },
      onFontSizeChange(f) {
        this.rendition.themes.fontSize(`${f}px`)
        // this.setFontSize(f)
        localStorage.setItem('fontSize', f)
      },
      onThemeChange(t) {
        console.log('should theme changed===>', t)
        this.setTheme(t)
      },
      hidePanel() {
        console.log('should panel close')
        this.isPanelShow = false
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
      regFontFamily() {
        //  注册字体资源
        this.rendition.hooks.content.register(contents => {
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/daysOne.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/cabin.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/montserrat.css`)
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/tangerine.css`)
        })
      },
      regTheme() {
        //  注册主题样式
        this.bookThemeList.forEach(theme => {
          this.rendition.themes.register(theme.name, theme.style)
        })
      },
      setTheme(t) {
        this.theme = t
        this.rendition.themes.select(t)
        this.setActiveTheme(t)
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
      initFontSize() {
        const fontSize = localStorage.getItem('fontSize')
        if (!fontSize) {
          localStorage.setItem('fontSize', 20)
        } else {
          this.setFontSize(+fontSize)
          this.rendition.themes.fontSize(fontSize + 'px')
          // this.fontSize = +fontSize
        }
      },
      initFontFamily() {
        const fontFamily = localStorage.getItem('fontFamily')
        if (!fontFamily) {
          localStorage.setItem('fontFamily', 'Cabin')
        } else {
          // this.setFontFamily(fontFamily)
          this.fontFamily = fontFamily
          this.rendition.themes.font(fontFamily)
        }
      },
      initTheme() {
        const theme = localStorage.getItem('theme')
        if (!theme) {
          localStorage.setItem('theme', 'default')
        } else {
          this.setTheme(theme)
          this.theme = theme
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
        this.regFontFamily()
        this.initFontFamily()
        this.regTheme()
        this.initTheme()
      },
    },
    mounted() {
      setTimeout(() => {
        const baseUrl = `${process.env.VUE_APP_RES_URL}epub/`
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