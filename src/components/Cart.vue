<template lang="pug">
    div(v-if="cart.length")
        b-table(striped hover :items="cart" :fields="fields")
            template(slot="action" slot-scope="cell")
                b-button(size="sm" variant="danger" @click.stop="removeProductFromCart(cell.item)") Eliminar
        b-alert(show variant="success" class="text-center")
            p Costo total: ${{totalCost}}
    b-alert(v-else show variant="info")
        p No hay Productos en el carrito
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'
export default {
    data() {
        return {
            fields: [ 'name', 'qty', 'price', 'action']
        }
    }, 
    computed: {
        ...mapState('cart', ['cart']),
        ...mapGetters('cart', ['totalCost'])
    },
    methods: {
        ...mapMutations('cart', ['removeProductFromCart'])
    }

}
</script>

