<template>
    <div id="app">
        <the-header></the-header>
        <div class="d-flex flex-row">
            <shop class="w-75"></shop>
            <cart class="w-25"></cart>
        </div>
    </div>
</template>

<script>
    import TheHeader from "./components/TheHeader";
    import Shop from "./components/Shop/Shop";
    import Cart from "./components/Cart/Cart";

    export default {
        name: 'App',
        components: {
            TheHeader,
            Shop,
            Cart,
        }
    }
</script>

<style>

</style>
