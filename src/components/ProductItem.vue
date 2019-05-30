<template lang="pug">
    b-card(:title="product.name"
        :img-src="product.picture"
        :img-alt="product.name"
        img-top
        style="max-width: 30rem;"
        class="mb-2")

        b-button(block variant="warning" @click="$emit('addToCart', product)")
            p Añadir al Carrito

</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
