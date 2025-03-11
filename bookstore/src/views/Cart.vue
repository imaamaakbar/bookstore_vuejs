<!-- src/views/Cart.vue -->
<template>
    <div>
      <h1>Keranjang Belanja</h1>
      <CartList />
    </div>
  </template>
  
  <script>
  import CartList from '../components/cartList.vue';
  export default {
    components: {
      CartList,
    },
  };
  </script>
  