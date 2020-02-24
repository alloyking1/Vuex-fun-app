import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/HelloWorld')},
        {path:'/update',  name:'Update', component: () =>import('./components/UpdateState')},
        
    ]
});

export default router;