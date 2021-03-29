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
    },
    updateActiveZone(state, activeTree) {
      state.activeTree = activeTree
    }
  },
  state: {
    folders: Object,
    currentFolder: {
      type: Object,
      default: {},
    },
    activeTree: Boolean
  },
  getters: {
    getFilesystem(state) {
      return state.folders
    },
    getCurrentFolder(state) {
      return state.currentFolder
    },
    getActiveTree(state) {
      return state.activeTree
    }
  }
}
