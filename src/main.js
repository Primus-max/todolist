import 'primevue/resources/themes/bootstrap4-light-purple/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import { createApp } from 'vue';

import PrimeVue from 'primevue/config';
import TabMenu from 'primevue/tabmenu';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.component('TabMenu', TabMenu)
app.use(router)
app.use(PrimeVue)
app.mount('#app')