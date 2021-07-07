<template>
<b-row>
    <b-card
        v-for="item in getData" :key="item.name"
        :title="item.name"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-2 col-4"
    >
        <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="primary" @click="addToCart(item.id)" v-if="!item.cartItem">Add To Cart</b-button>
        <b-button href="#" variant="primary" @click="removeFromCart(item.id)" v-if="item.cartItem">Remove From Cart</b-button>
    </b-card>
</b-row>
</template>
<script>
export default {
    name: 'cart-item',
    props: ['getData'],
    data(){
        return {
            cartItem: false,
        }
    },
    methods: {
        addToCart(id){
            this.cartItem = true;
            this.$store.commit("add_to_cart", id);
        },
        removeFromCart(id){
            this.cartItem = false;
            this.$store.commit("remove_from_cart", id);
        }
    },
    computed: {
    },
}
</script>