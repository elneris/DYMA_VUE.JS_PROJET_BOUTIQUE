<template>
    <div class="d-flex flex-row justify-content-between">
        <span>{{ item.title }}</span>
        <span><strong>{{ item.price }} €</strong></span>
    </div>
</template>

<script>
    export default {
        name: "CartProductItem",
        props: ['item']
    }
</script>

<style scoped>

</style>