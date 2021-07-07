<template>
  <b-container class="home">
    <h1>Home</h1>
    <div>{{name}}</div>
    {{cartListLength}}
    <cart-item :getData="getData"></cart-item>
  </b-container>
</template>

<script>
import CartItem from '../shopping-cart/cart-item.vue';

export default {
  name: 'home',
  data () {
    return {
      name: 'hareesh'
    }
  },
  components: {
    CartItem,
  },
  computed: {
    getData(){
      return this.$store.state.data;
    },
    cartListLength(){
      return this.$store.state.cartList.length;
    }
  },
  mounted(){
    this.$store.commit("GET_DATA")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
