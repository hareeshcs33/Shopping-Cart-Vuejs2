<template>
  <div class="navbar">
    <ul class="w-100">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/cart">Cart <span>({{cartLength}})</span></router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    cartLength(){
      return this.$store.getters.cartListLength;
    }
  }
}
</script>
<style scoped>
.navbar {
    margin: 10px 0;
}
.navbar ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    list-style: none;
    border-bottom: 1px solid green;
    margin: 0;
    padding: 0;
}
.navbar ul li {
  margin-right: 1px;
  display: block;
}
.navbar ul li:hover a {
  border-bottom: 5px solid green;
}
.navbar ul li a {
    color: #454545;
    font-size: 16px;
    text-decoration: none;
    display: block;
    padding: 8px 12px;
    border-bottom: 5px solid transparent;
}
.navbar li a.router-link-active.router-link-exact-active {
  border-bottom: 5px solid green;
}
</style>