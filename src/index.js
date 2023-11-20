
import {createApp} from 'vue'
import App from './App.vue'

// import api from '@tauri-apps/api'

const app=createApp(App)

app.mount('#app')

// invoke("my_custom_command",{
//     invoke_message: "JS传递的信息"
// })