export default {
  actions: {
    async getData({ commit, getters, dispatch }, limit) {
      const posts = limit;
      commit('updateFolders', posts)
    },
    sayHello() {}
  },
  mutations: {
    updateFolders(state, posts) {
      state.folders = posts
    },
    updateCurrentFolder(state, folder) {
      state.currentFolder = folder;
    }
  },
  state: {
    folders: Object,
    currentFolder: {
      type: Object,
      default: {}
    }
  },
  getters: {
    getFilesystem(state) {
      return state.folders
    },
    getCurrentFolder(state) {
      return state.currentFolder
    }
  }
}
