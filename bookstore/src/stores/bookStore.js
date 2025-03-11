import { defineStore } from 'pinia';
import axios from 'axios';

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
  }),
  actions: {
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/api');
        this.books = response.data;  
        console.log("Data dari API:", this.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },

    async addbooks() {
      return true;
    },
  },
});
