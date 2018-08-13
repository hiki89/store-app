<template>
  <div>
    <h1>Customers</h1>
    <table class="table table-striped table-dark">
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{customer.firstName}}</td>
          <td>{{customer.lastName}}</td>
          <td>{{customer.email}}</td>
          <td>
            <button @click="deleteCustomer(customer)">Delete</button>
          </td>
          <td>
          <router-link class="badge badge-primary" :to="{name: 'latest-purchases', params: {id: customer.id}}">Latest Purchases</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { customerService } from '../services/CustomerService';

export default {
  data() {
    return {
      customers: customerService.list()
    }
  },

  methods: {
    deleteCustomer(customer){
      customerService.remove(customer);
    }
  }   
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
