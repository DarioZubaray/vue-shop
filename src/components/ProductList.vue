<template lang="pug">
    div
        div(v-if="products.length")
            paginate(name="products" :list="products" :per="perPage")

                b-card-group(columns)
                    product-item(v-for="product in paginated('products')" :key="product.id" 
                        :product="product" @addToCart="'addProductToCart'")

            paginate-links(for="products" :classes={'ul': 'pagination', 'li': 'page-item', 'li > a': 'page-link'})

        b-alert(v-else show variant="info") No hay productos que mostrar

</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex'
    import ProductItem from './ProductItem'

    export default {
        name: 'ProdutcsList',
        components: {
            ProductItem
        },
        mounted() {
            this.fetchProducts()
        }, 
        data() {
            return {
                paginate: ['products'],
                perPage: 3
            }
        },
        computed: {
            ...mapState('products', ['products'])
        },
        methods: {
            ...mapActions('products', ['fetchProducts']),
            addProductToCart(product) {

            }
        }
    }
</script>