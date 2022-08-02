import RepositoryFactory from '@/repositories/RepositoryFactory'

const state = {
  loading: false,
  data: null
}

const actions = {
  async getAllPosts ({ commit }) {
    commit('SET_LOADING', true)
    const repository = RepositoryFactory.get('posts')
    try {
      const data = await repository.getAll()

      commit('SET_DATA', data.data)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async getPostByID ({ commit }, id) {
    commit('SET_LOADING', true)
    const repository = RepositoryFactory.get('posts')
    try {
      const data = await repository.getById(id)

      commit('SET_DATA', data.data)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async create ({ commit }, payload) {
    commit('SET_LOADING', true)
    const repository = RepositoryFactory.get('posts')
    try {
      const data = await repository.createPost(payload)
      commit('SET_MORE', data.data)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async edit ({ commit }, payload) {
    commit('SET_LOADING', true)
    const repository = RepositoryFactory.get('posts')
    try {
      const data = await repository.editPost(JSON.stringify(payload), payload.id)
      commit('UPDATE_DATA', data.data)
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async delete ({ commit }, id) {
    commit('SET_LOADING', true)
    const repository = RepositoryFactory.get('posts')
    try {
      const data = await repository.deletePost(id)

      commit('DELETE_DATA', data.data)
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

const mutations = {
  SET_DATA (state, data) {
    state.data = data
  },
  UPDATE_DATA (state, data) {
    state.data[data.id - 1] = data
  },
  SET_LOADING (state, boolean) {
    state.loading = boolean
  },
  SET_MORE (state, data) {
    state.data.push(data)
  },
  DELETE_DATA (state, data) {
    state.data.splice(data.userId - 1, 1)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
