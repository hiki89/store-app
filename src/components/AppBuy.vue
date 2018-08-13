<template>
    <div>
        <h1>{{ product.title }}</h1>
        <p>Quantity: {{ product.quantity }}</p>
        <div v-if="product.quantity > 0">
            <form @submit.prevent>
            <select v-model='buyer'>
                <option disabled="" selected="">Select customer</option>
                <option v-for="(customer, index) in customers" :key="index" :value="customer">
                    {{ customer.firstName }} {{ customer.lastName }}
                </option>
            </select>  <br>
            <button @click="buyProduct" class="btn btn-success">Confirm</button> 
            <router-link to="/products" class="btn btn-danger">Cancel</router-link> 
            </form>
        </div>
        <div v-else>
            <h4>We don't have this product at the moment</h4>
            <router-link to="/products" class="btn btn-danger">Go back</router-link>
        </div>
    </div>
</template>

<script>
import { productService } from '../services/ProductService';
import { customerService } from '../services/CustomerService';

export default {
    props: ['id'],

    data() {
        return {
            product: productService.singleProduct(this.id),
            customers: customerService.list(),
            buyer: {}
        }
    },
    
    methods: {
        buyProduct() {
            if(!this.buyer.id) {
                alert("Please select a customer");
            } else {
                customerService.addProduct(this.buyer, this.product);
                productService.changeProductsQuantity(this.product, '-');
                this.buyer = {};
                alert("You just sold " + this.product.title)
            }
        }
    }
}
</script>

<style>

</style>


