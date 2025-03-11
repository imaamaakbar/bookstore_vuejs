<!-- src/components/BookItem.vue -->
<template>
    <div class="card mb-3 ">
      <div class="row g-0">
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{ book.author }}</p>
            
            <div class="row">
              <div class="col">
                <button class="btn btn-primary m-2" @click="addToCart(book)">Tambah ke Keranjang</button>
              <button class="btn btn-warning m-2" @click="">Hapus</button>
              <button class="btn btn-danger m-2" @click="">Update</button>
              </div>
              
            </div>
            
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
  