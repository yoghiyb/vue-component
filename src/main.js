import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import MyRadioButton from "./components/MyRadioButton.vue";
const app = createApp(App)
app.component('my-radio-button', MyRadioButton)
app.mount('#app')
