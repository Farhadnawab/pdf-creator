import Vue from "vue";
import Router from 'vue-router'
import addPDFVue from '@/components/pages/addPDF.vue';
import editPDFVue from '@/components/pages/editPDF.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add',
      component: addPDFVue,
    },
    {
      path: '/edit/:id',
      component: editPDFVue,
    },
    {
        path:'/',
        redirect: '/add'
    }
  ]
})

//router.replace({ path: '/add', redirect: '/' })

