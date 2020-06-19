import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'


Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  //routes : routes sugar synthax ES6
  routes,
  //Elimina a necessidade do '#'no path 
  //(o servidor precisa estar preparado para retornar sempre o index.html)
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
