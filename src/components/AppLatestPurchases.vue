<template>
  <div>
    <h1 >{{ customer.firstName }} {{ customer.lastName }}</h1>
    <h3>Email: {{ customer.email}}</h3>
    <h5>Latest purchases: </h5>
    <ul class="list-group list-group-flush" v-for="(product, index) in customer.products" :key="index">
      <li class="list-group-item">
        {{ product.title }}
      </li>
    </ul><br>
    <router-link class="btn btn-dark" to="/customers">Back to customers</router-link>

    
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService';

export default {
  data() {
      return {
          
      }
  },
  created() {
     this.customer = customerService.singleCustomer(this.$route.params.id)
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
