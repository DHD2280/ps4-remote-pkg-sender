import { make } from 'vuex-pathify'
import fs from './../../plugins/fs.js'

export const state = {
    tasks: [],
    files: [],
    serverFiles: [],
    queue: [],
    status: 'stopped',
    app: null,
}


// make all mutations
export const mutations = {
    ...make.mutations(state),

}

// actions
export const actions = {
    ...make.actions(state),

    loadFiles({ commit, state }, path){
        console.log("check base path ", path);
        let files = fs.readDirSync(path)
        commit('setServerFiles', files)
    },
    // addFiles({ commit, dispatch, state}, payload){
    //     commit('addFiles', payload)
    // }
}

// getters
export const getters = {
  // make all getters (optional)
  ...make.getters(state),

  // overwrite default `items` getter
  // allFiles: state => {
  //     return state.images
  // },
}
