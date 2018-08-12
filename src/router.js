import Vue from 'vue';
import Router from 'vue-router';

import Customers from './components/AppCustomers.vue';
import Products from './components/AppProducts.vue';
import AddCustomers from './components/AddCustomers.vue';
import AppLatestPurchases from './components/AppLatestPurchases.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: 'customers'},
        {path: '/customers', component: Customers},
        {path: '/products', component: Products},
        {path: '/add/customer', component: AddCustomers},
        {path: '/customers/:id', component: AppLatestPurchases, name: 'latest-purchases'},
    ]
})

