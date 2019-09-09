export const state = () => ({
  fullname: '',
  loginId: '',
  skkuId: '',
  isAdmin: true
})

export const mutations = {
  SET_LOGIN (state, user) {
    state.username = user.fullname
    state.loginId = user.loginId
    state.skkuId = user.skkuId
    state.isAdmin = user.isAdmin
  },
  LOGOUT (state, user) {
    state.username = ''
    state.loginId = ''
    state.skkuId = ''
    state.isAdmin = false
  }
}

export const actions = {
}
