// src/stores/bookStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
  }),
  actions: {
    async fetchBooks() {
      try {
        const response = await axios.get('https://api.example.com/books');
        this.books = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
