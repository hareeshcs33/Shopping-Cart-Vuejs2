<template>
    <div>
        <h3>cartList</h3>
        <ul>
            <li v-for="item in cartList" :key="item.id">
                <span>{{item.name}}</span>
                <span @click="removeFromCart(item.id)" class="delete-text">Delete</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'cart-list',
    computed: {
        cartList(){
            return this.$store.getters.cartList;
        }
    },
    methods: {
        removeFromCart(id){
            this.$store.commit("remove_from_cart", id);
        }
    }
}
</script>
<style>
.delete-text {
    color: red;
    cursor: pointer;
}
</style>