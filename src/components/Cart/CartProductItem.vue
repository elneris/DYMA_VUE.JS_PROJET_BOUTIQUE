<template>
    <div class="d-flex flex-row justify-content-between">
        <span>{{ item.title }}</span>
        <span><strong>{{ item.price }} €</strong></span>
        <button @click="removeItemFromCart" class="close">
            <span>&times;</span>
        </button>
    </div>
</template>

<script>
    import { eventBus } from "../../main";

    export default {
        name: "CartProductItem",
        props: ['item'],
        methods: {
            removeItemFromCart() {
                eventBus.removeItemFromCart({...this.item});
            }
        }
    }
</script>

<style scoped>

</style>