<!-- src/views/Home.vue -->
<template>
    <div class="row">
      <h1>Daftar Buku</h1>
      <BookList />
    </div>
  </template>
  
  <script>
  import BookList from '../components/bookList.vue';
  
  export default {
    components: {
      BookList,
    },
  };
  </script>
  