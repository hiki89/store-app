<template>
  <div>
    <h1>Products</h1>
    <input type="text" v-model='search' placeholder="Search">
    <ul class="list-group list-group-flush" v-for='(product, index) in filteredProducts' :key='index'>
      <li class="list-group-item">{{ product.title }} - Quantity: {{ product.quantity }}</li>
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

</style>