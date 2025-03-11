<!-- src/components/CartItem.vue -->
<template>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5>{{ item.title }}</h5>
        <p>{{ item.author }}</p>
        <p>{{ item.price | currency }} x {{ item.quantity }}</p>
      </div>
      <button class="btn btn-danger" @click="removeFromCart(item.id)">Hapus</button>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cartStore';
  
  export default {
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    setup() {
      const cartStore = useCartStore();
      const removeFromCart = (id) => {
        cartStore.removeFromCart(id);
      };
      return { removeFromCart };
    },
  };
  </script>
  