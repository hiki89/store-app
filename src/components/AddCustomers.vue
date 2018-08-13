<template>
  <div>
    <h1>Add Customer</h1>
    <form @submit.prevent class="form-group">
        <label>First Name</label>
        <input v-model="newCustomer.firstName" type="text" class="form-control" placeholder="Name"> <br>
        <label>Last Name</label>
        <input v-model="newCustomer.lastName" type="text" class="form-control" placeholder="Last name"> <br>
        <label>Email</label>
        <input v-model="newCustomer.email" type="text" class="form-control" placeholder="Email"> <br>
        <button @click="addCustomer" type="submit" class="btn btn-primary">Add Customer</button>
    </form>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService';

export default {
  data() {
      return {
          newCustomer: {
              products: []
          }
      }
  },
  
    methods: {
        addCustomer() {
            customerService.add(this.newCustomer)
            this.newCustomer = {products: []}
            this.$router.push('/customers')
        }
    }   
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>