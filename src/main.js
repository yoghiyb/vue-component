import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import MyRadioButton from "./components/MyRadioButton.vue";
import MyForm from './components/MyForm.vue'
import MyFormDate from './components/MyFormDate.vue';

const app = createApp(App)
app.component('my-radio-button', MyRadioButton)
app.component('my-form', MyForm)
app.component('my-form-date', MyFormDate)
app.mount('#app')
