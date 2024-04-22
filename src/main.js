
import { createApp } from 'vue'
import App from './App.vue'

import "./css/mainStyle.css"
import router from './router'
import 'boxicons'
import { sharedData } from './hooks/coachs'

const app = createApp(App)
app.config.globalProperties.$sharedData = sharedData;
app.use(router);
app.mount('#app')
