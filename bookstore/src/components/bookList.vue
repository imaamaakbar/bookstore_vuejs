<!-- src/components/BookList.vue -->
<template>
    <div class="row">
      <div class="col-md-6" v-for="book in books" :key="book.id">
        <BookItem :book="book" />
      </div>
    </div>
  </template>
  
  <script>
  import { useBookStore } from '../stores/bookStore';
  import BookItem from '../components/bookItem.vue';
  import { onMounted } from 'vue';
  
  export default {
    components: {
      BookItem,
    },
    setup() {
      const bookStore = useBookStore();
      onMounted(() => {
        bookStore.fetchBooks();
      });
      return {
        books: bookStore.books,
      };
    },
  };
  </script>
  