<template>
    <div class="card product-container m-2" style="width: 18rem;">
        <img class="card-img-top" :src="product.img" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
       </div>
        <div class="card-footer text-muted">
            <span>{{ product.price }} €</span>
            <button @click="addProductToCart" class="btn btn-primary btn-sm float-right">Commander</button>
        </div>
    </div>
</template>

<script>
    import { eventBus } from "../../main";

    export default {
        name: "ProductItem",
        props: ['product'],
        methods: {
            addProductToCart() {
                eventBus.addProductToCart({...this.product})
            }
        }
    }
</script>

<style>
    .product-container {
        height: auto;
    }

    p {
        font-size: 12px;
    }
</style>