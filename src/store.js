import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setLoginState(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
  },
  actions: {
    login(context) {
      context.commit('setLoginState', true);
      console.log('User logged in');
    },
    logout(context) {
      context.commit('setLoginState', false);
      console.log('User logged out');
    },
  },
});

export default store;
