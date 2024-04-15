
import { createApp } from 'vue'
import App from './App.vue'

import "./css/mainStyle.css"
import router from './router'
import 'boxicons'

const app = createApp(App)
app.use(router);
app.mount('#app')
