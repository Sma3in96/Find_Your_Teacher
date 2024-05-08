import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state: {
    isLoggedIn: false,
    username: "",
    user_id: "",
    user_is_coach: false
  },
  mutations: {
    setLoginState(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setUser(state, username) {
      state.username = username;
    },
    setUserId(state, user_id) {
      state.user_id = user_id;
    },
    setCoach(state, user_is_coach) {
      state.user_is_coach = user_is_coach;
    },
  },
  actions: {
    login(context) {
      context.commit('setLoginState', true);
      console.log('User logged in');
    },
    logout(context) {
      context.commit('setLoginState', false)
      context.commit('setUser', "");
      context.commit('setUserId', "");
      context.commit('setCoach', false);
    },
    setUser(context, username) {
      context.commit('setUser', username);
    },
    setUserId(context, user_id) {
      context.commit('setUserId', user_id);
    },
    setCoach(context, user_is_coach) {
      context.commit('setCoach', user_is_coach);
    },
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    path: ['isLoggedIn', 'username','user_id', 'user_is_coach'],
  })],
});

export default store;
