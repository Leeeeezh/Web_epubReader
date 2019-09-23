const book = {
  state: {
    fileName: '',
    fontSize: 20
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_FONTSIZE': (state, fontSize) => {
      state.fontSize = fontSize
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
    }
  },
  getters: {
    fileName: state => state.fileName,
    fontSize: state => state.fontSize
  }
}

export default book