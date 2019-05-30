<template>
  <div id="app" class="mt-5">
    <shop-layout>
      <template slot="product-list">
          <product-list></product-list>
      </template>
      <template slot="cart">
          <p>Carrito</p>
      </template>
    </shop-layout>
  </div>
</template>

<script>
import ShopLayout from '@/components/ShopLayout'
import ProductList from '@/components/ProductList'

export default {
  name: 'app',
  components: {
    ShopLayout, ProductList
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
