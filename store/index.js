import axios from 'axios'

export const state = () => ({
  totalDeaths: {}
})

export const actions = {
  async getCountDeaths ({ commit }) {
    try {
      const data = await axios('https://www.breakingbadapi.com/api/death-count')
      commit('add', data.data[0])
    } catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  add (state, text) {
    state.totalDeaths = text.deathCount
  }
}
