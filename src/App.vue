<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <h1 style="color: lightgray">Store App</h1>
      <router-link class="btn btn-outline-light" to="/customers">Customers</router-link>
      <router-link class="btn btn-outline-light" to="/add/customer">Add Customer</router-link>
      <router-link class="btn btn-outline-light" to="/products">Products</router-link>
    </nav>
    <router-view></router-view>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'


export default {
  components: {
    
  }
}
</script>

<style>
nav {
  list-style: none;
}
h1{
  text-align: center;
}
</style>
