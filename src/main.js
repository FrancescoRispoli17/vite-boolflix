import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faStar,faMagnifyingGlass)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
