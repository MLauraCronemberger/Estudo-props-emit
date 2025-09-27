import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles' // Estilos do Vuetify
import './style.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // Define o conjunto de ícones padrão
  },
})

createApp(App)
  .use(vuetify)
  .mount('#app')
