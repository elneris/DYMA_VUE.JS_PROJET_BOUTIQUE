<template>
    <div class="card m-4" style="width: 18rem;">
        <div class="card-body">
            <h4 class="card-title border-bottom pb-3">PANIER</h4>
            <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
        </div>
        <div class="card-footer text-muted">
            <span>{{ totalCart }} €</span>
            <button class="btn btn-primary btn-sm float-right">Commander</button>
        </div>
    </div>
</template>

<script>
    import CartProductItem from "./CartProductItem";

    export default {
        name: "CartProductsList",
        components: {
            CartProductItem
        },
        props: ['cart'],
        computed: {
            totalCart() {
                return this.cart.reduce((acc, v) => {
                    acc += v.price;
                    return acc;
                }, 0)
            }
        }
    }
</script>

<style scoped>

</style>