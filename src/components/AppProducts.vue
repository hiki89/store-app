<template>
  <div>
    <h1>Products</h1>
    <label><i><b>Search product</b></i></label>
    <input type="text" class="form-control" v-model='search' placeholder="Search product"><br><br>
    <ul class="list-group list-group-flush" v-for='(product, index) in filteredProducts' :key='index'>
      <li class="list-group-item">{{ product.title }} - Quantity: {{ product.quantity }} 
        <button class="btn btn-dark" @click="changeProductQuantity(product, '-')">-</button>
        <button class="btn btn-secondary" @click="changeProductQuantity(product, '+')">+</button>
        <router-link style="float:right" :to="{name: 'buy', params: {id: product.id}}" class="btn btn-success">Buy</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { productService } from '../services/ProductService.js';

export default {
  data() {
    return {
      products: productService.list(),
      search: ''
    }
  },

  methods: {
    changeProductQuantity(product, value) {
      productService.changeProductsQuantity(product, value)
    }
  },

  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  margin-left: 10px;
  float: right;
}

</style>