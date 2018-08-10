<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
        <router-link to="/customers">Customers</router-link>
        <router-link to="/products">Products</router-link>
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

</style>
