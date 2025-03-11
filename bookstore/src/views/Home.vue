<!-- src/views/Home.vue -->
<template>
    <div class="container">
        <div class="row mb-3">
            <div class="col d-flex justify-content-between ">
                <h1>Daftar Buku</h1>
                <button class="btn btn-primary m-2" @click="">Tambah</button> 
            </div>
        </div>
      
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
  