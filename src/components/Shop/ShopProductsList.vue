<template>
    <div class="d-flex flex-row flex-wrap">
        <shop-product-item></shop-product-item>
        <shop-product-item></shop-product-item>
        <shop-product-item></shop-product-item>
        <shop-product-item></shop-product-item>
        <shop-product-item></shop-product-item>
        <shop-product-item></shop-product-item>
        <shop-product-item></shop-product-item>
        <shop-product-item></shop-product-item>
    </div>
</template>

<script>
    import ShopProductItem from "./ShopProductItem";

    export default {
        name: "ProductsList",
        components: {
            ShopProductItem,
        }
    }
</script>

<style scoped>

</style>