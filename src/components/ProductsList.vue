<template>
    <div>
        {{ products.length }}
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex'
    export default {
        name: 'ProdutcsList',
        mounted() {
            this.fetchProducts()
        }, 
        data() {
            return {
                paginated: ['products'],
                perPage: 3
            }
        },
        computed: {
            ...mapState('products', ['products'])
        },
        methods: {
            ...mapActions('products', ['fetchProducts'])
        }
    }
</script>