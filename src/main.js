
import { createApp } from 'vue'
import App from './App.vue'

import "./css/mainStyle.css"
import router from './router'
import 'boxicons'

import store from './store.js'


const app = createApp(App)
app.use(router);
app.use(store);
app.mount('#app')
