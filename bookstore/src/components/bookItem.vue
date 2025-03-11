<!-- src/components/BookItem.vue -->
<template>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="book.coverImage" class="img-fluid rounded-start" alt="Cover Image">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{ book.author }}</p>
            <p class="card-text">{{ book.price | currency }}</p>
            <button class="btn btn-primary" @click="addToCart(book)">Tambah ke Keranjang</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cartStore';
  
  export default {
    props: {
      book: {
        type: Object,
        required: true,
      },
    },
    setup() {
      const cartStore = useCartStore();
      const addToCart = (book) => {
        cartStore.addToCart(book);
      };
      return { addToCart };
    },
  };
  </script>
  