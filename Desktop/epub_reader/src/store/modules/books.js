const book = {
  state: {
    fileName: '',
    fontSize: 20,
    activeTheme: 'default'
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_FONTSIZE': (state, fontSize) => {
      state.fontSize = fontSize
    },
    'SET_THEME': (state, activeTheme) => {
      state.activeTheme = activeTheme
    }
  },
  actions: {
    setFileName: ({
      commit
    }, fileName) => {
      return commit('SET_FILENAME', fileName)
    },
    setFontSize: ({
      commit
    },fontSize) => {
      return commit('SET_FONTSIZE', fontSize)
    },
    setActiveTheme: ({
      commit
    },activeTheme) => {
      return commit('SET_THEME', activeTheme)
    }
  },
  getters: {
    fileName: state => state.fileName,
    fontSize: state => state.fontSize,
    activeTheme: state => state.activeTheme,
  }
}

export default book