import 'primevue/resources/themes/vela-orange/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import TabMenu from 'primevue/tabmenu';
import router from './router';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

const app = createApp(App);
app.component('SplitterPanel', SplitterPanel)
app.component('Splitter', Splitter)
app.component('Calendar', Calendar)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('TabMenu', TabMenu)
app.use(router)
app.use(PrimeVue)
app.mount('#app')