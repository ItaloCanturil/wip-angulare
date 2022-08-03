const state = {
  data: []
}

const actions = {
  getAllUser ({ commit }) {
    const data = localStorage.getItem('users')
    if (data) commit('SET_DATA', JSON.parse(data))
  },

  create ({ commit }, payload) {
    commit('SET_MORE', payload)
  },

  edit ({ commit }, payload) {
    commit('UPDATE_DATA', payload)
  },

  delete ({ commit }, id) {
    commit('DELETE_DATA', id)
  }
}

const mutations = {
  SET_DATA (state, data) {
    state.data = data
  },
  UPDATE_DATA (state, data) {
    state.data[data.id - 1] = data
    window.localStorage.setItem('users', JSON.stringify(state.data))
  },
  SET_MORE (state, data) {
    state.data.push(data)
    window.localStorage.setItem('users', JSON.stringify(state.data))
  },
  DELETE_DATA (state, data) {
    state.data.splice(data.id, 1)
    window.localStorage.setItem('users', JSON.stringify(state.data))
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
