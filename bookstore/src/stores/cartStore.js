// src/stores/cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    totalItems: (state) => state.cartItems.length,
    totalPrice: (state) =>
      state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(book) {
      const existingItem = this.cartItems.find((item) => item.id === book.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ ...book, quantity: 1 });
      }
    },
    removeFromCart(bookId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== bookId);
    },
    clearCart() {
      this.cartItems = [];
    },
  },
});
