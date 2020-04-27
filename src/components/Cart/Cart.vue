<template>
    <cart-products-list :cart="cart"></cart-products-list>
</template>

<script>
    import CartProductsList from "./CartProductsList";
    import { eventBus } from "../../main";

    export default {
        name: "Cart",
        components: {
            CartProductsList
        },
        data() {
            return {
                cart: []
            }
        },
        created() {
            this.cart = eventBus.cart;
            eventBus.$on('update:cart', (cart) => {
                this.cart = cart;
            })
        }
    }
</script>

<style scoped>

</style>