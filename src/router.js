import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/HelloWorld')},
        {path:'/update',  name:'Update', component: () =>import('./components/UpdateState')},
        {path:'/ben',  name:'Update', component: () =>import('./components/Ben')},
        {path:'/caleb',  name:'Update', component: () =>import('./components/Caleb')},
        {path:'/david',  name:'Update', component: () =>import('./components/David')},
        {path:'/gavin',  name:'Update', component: () =>import('./components/Gavin')},
        {path:'/scott',  name:'Update', component: () =>import('./components/Scott')},
        {path:'/watson',  name:'Update', component: () =>import('./components/Watson')},
        {path:'/demo',  name:'Update', component: () =>import('./components/Demo')},        
    ]
});

export default router;