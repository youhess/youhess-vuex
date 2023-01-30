// vuex中一共有五个状态 State  Getter  Mutation   Action   Module

// 提供唯一的公共数据源，所有共享的数据统一放到store的state进行储存，相似与data
const state = {
  variant: 'youhess',
  count: 0
}

const mutations = {
  SET_VARIANT: (state, variant) => {
    state.variant = variant
  },
  SET_COUNT: (state, count) => {
    state.count = count
  },
  addMutation: (state, selfDecide) => {
    state.count += selfDecide
  },
  reduceMutation: state => {
    state.count--
  }
}
const actions = {
  // 可以在这里定义方法，操作state
  addActions: ({ commit }, num) => {
    let num2 = (state.count += num)
    commit('SET_COUNT', num2)
  },
  reduceActions: ({ commit }) => {
    let num3 = state.count - 1
    commit('SET_COUNT', num3)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
