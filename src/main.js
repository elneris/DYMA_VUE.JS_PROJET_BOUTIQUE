import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
    data: {
        products: [
            {
                id: '1',
                img: 'https://media.materiel.net/r550/products/MN0005379376_1_0005436118_0005436276.jpg',
                title: 'DELL G7 17-7790',
                description: `Le PC portable gaming Dell G7-7790 (5G0YP) profite de l'arrivée des nouvelles cartes graphiques pour s'offrir une toute nouvelle robe. Il accueille donc ainsi la RTX 2070 de la marque au caméléon. Pour la mettre en valeur, l'ensemble des composants de ce nouveau G7 se met au diapason (dalle IPS Full HD 144 Hz, processeur Intel Core i7 Hexa Core et stockage SSD grosse capacité pour vous offrir une expérience de jeu intense.`,
                price: 2199
            },
            {
                id: '2',
                img: 'https://media.materiel.net/r550/products/MN0005561669_1_0005561881_0005562001_0005658454_0005658618_0005658647.jpg',
                title: 'Gigabyte Aero 17 HDR',
                description: `Avec le PC Portable Aero 17 XB-8FR4130SP, Gigabyte reprend les ingrédients qui ont fait son succès : châssis fin tout alumunium, finition qualité...Mais ce nouveau modèle intègre aussi les dernières nouveautés en provenance de chez Intel et NVIDIA avec un processeur Comet Lake et une RTX 2070 dans sa version Super, ainsi qu'une impressionnante dalle 4K HDR. En bref, un véritable condensé de technicité et d'innovation au service de ce 17 pouces qui reste résolument mobile malgré son format.`,
                price: 2999
            },
            {
                id: '3',
                img: 'https://media.materiel.net/r550/products/MN0005358686_1_0005395123_0005482684.jpg',
                title: 'ASUS ROG STRIX 3',
                description: `Avec son PC Portable gamer ROG Strix 3 G731GT-AU041T, Asus nous propose une toute nouvelle version de son ROG 17 pouces. Au chapitre des nouveautés, on note l'apparition de barres de LED sur 3 côtés du châssis ainsi que le déplacement de certaines connectiques sur la partie arrière. Ce nouveau ROG fait aussi la part belle aux composants : processeur Intel Core i5-9300H et carte graphique NVIDIA GTX 1650 sont de la partie pour vous offrir une expérience de jeu intense.`,
                price: 1249
            },
            {
                id: '4',
                img: 'https://media.materiel.net/r550/oproducts/AR201806140060_g1_0005183939_0005186562_0005312355_0005313200_0005536609.jpg',
                title: 'MSI GT63 Titan',
                description: `Le PC Portable gamer MSI GT63 Titan 9SG-064FR est un 15,6 pouces qui s'adresse aux gamers exigeants en quête de performance. Et à cet effet, ce GT63 ne fait pas dans la demi mesure puisqu'il intègre la nouvelle carte graphique NVIDIA RTX 2080 ! Pour accompagner ce nouveau monstre de puissance, il intègre bien sûr une kyrielle de composants de haute volée : dalle IPS Ultra HD, processeur i7-9750H, 32 Go de RAM DDR4 et SSD NVMe PCIe sont donc aussi de la partie pour vous offrir une configuration ultra puissante mais qui n'en demeure pas moins mobile !`,
                price: 3399
            },
            {
                id: '5',
                img: 'https://media.materiel.net/r550/products/MN0005490709_1.jpg',
                title: ' Razer Blade 15',
                description: `Avec ce Blade 15 (RZ09-03018F02-R3F1), Razer continue d'étoffer sa gamme de PC Portables. Basé sur un châssis monobloc en aluminium, il intégre un écran bord à bord de 15,6 pouces et en profite pour accueillir un processeur hexacore d'Intel (Coffee Lake). Le reste de ses composants n'est pas en reste : SSD PCIe NVMe, RAM DDR4 2666 MHz, ainsi que la plus puissante carte graphique disponible sur un laptop avec la RTX 2080 (Max-Q)... la liste est longue pour un portable gamer pourtant aux dimensions minimalistes. Découvrez le dès maintenant !`,
                price: 3199
            },
            {
                id: '6',
                img: 'https://media.materiel.net/r550/products/MN0005444514_1.jpg',
                title: 'Alienware M15 R2',
                description: `Le nouvel Alienware M15 R2 (PT3K2) vous propose un châssis gamer à la configuration puissante, mais qui sait rester résolument mobile. Avec son arsenal impressionnant de composants de haute volée comme sa dalle OLED Ultra HD, ses 2 SSD installés en RAID 0 ou sa carte graphique RTX 2070, il possède les arguments nécessaires pour faire chavirer votre coeur de gamer.`,
                price: 2999
            },
        ],
        cart: [
        ],
    },
    methods: {
        addProductToCart(product) {
            if (!this.cart.map(i => i.id).includes(product.id)) {
                this.cart = [ ...this.cart, product];
                this.$emit('update:cart', this.cart.slice());
            }
        },
        removeItemFromCart(item) {
            this.cart = this.cart.slice().filter(i => i.id !== item.id);
            this.$emit('update:cart', this.cart.slice());
        }
    }
})

new Vue({
    render: h => h(App),
}).$mount('#app')
