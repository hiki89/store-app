<template>
  <div>
    <h1 >{{ customer.firstName }}</h1>
    
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
     this.customer = customerService.oneC(this.$route.params.id)
     console.log(this.customer);
  } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
