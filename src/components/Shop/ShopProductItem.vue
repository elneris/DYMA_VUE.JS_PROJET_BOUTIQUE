<template>
    <div class="w-25 p-3 product-container d-flex flex-column">
        <div class="d-flex flex-row justify-content-center">
            <img style="height: 150px;" :src="product.img" alt="img">
        </div>
        <div>
            <h1>{{ product.title }}</h1>
            <hr>
        </div>
        <div>
            <p>{{ product.description }}</p>
        </div>
        <div>
            <span>{{ product.price }}</span>
            <button class="btn btn-primary btn-sm float-right">Commander</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductItem",
        data() {
            return {
                product: {
                    img: 'https://www.apple.com/fr/macbook-air/images/overview/macos__kp74urneu7u6_small.jpg',
                    title: 'Macbook',
                    description: `Incroyablement fin et léger, le MacBook Air monte encore en gamme. Il intègre désormais un superbe écran Retina, un nouveau Magic Keyboard, Touch ID, des processeurs jusqu’à deux fois plus performants1, des graphismes plus rapides et une capacité de stockage multipliée par deux. Son boîtier au design épuré est constitué d’aluminium 100 % recyclé, ce qui en fait le Mac le plus respectueux de l’environ­nement jamais créé2. Et avec son autonomie d’une journée, notre Mac le plus apprécié vous permet de tout faire, partout.`,
                    price: '1199 €',
                }
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