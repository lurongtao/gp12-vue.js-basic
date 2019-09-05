<template>
  <div>
    <h1>购物车案例</h1>
    <h3>产品</h3>
    <hr />
    <product></product>
    <h3>购物车</h3>
    <hr />
    <cart></cart>
  </div>
</template>

<script>
import Product from './pages/Product'
import Cart from './pages/Cart'
export default {
  components: {
    Product,
    Cart
  }
}
</script>