<!-- src/components/CartList.vue -->
<template>
    <div>
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
      <div class="d-flex justify-content-between align-items-center mt-4">
        <h4>Total: {{ totalPrice | currency }}</h4>
        <button class="btn btn-success" @click="checkout">Checkout</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cartStore';
  import CartItem from './CartItem.vue';
  
  export default {
    components: {
      CartItem,
    },
    setup() {
      const cartStore = useCartStore();
      const checkout = () => {
        // Implementasi proses checkout
        alert('Checkout berhasil!');
        cartStore.clearCart();
      };
      return {
        cartItems: cartStore.cartItems,
        totalPrice: cartStore.totalPrice,
        checkout,
      };
    },
  };
  </script>
  