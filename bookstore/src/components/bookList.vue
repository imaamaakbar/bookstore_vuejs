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
import { storeToRefs } from 'pinia'; // Tambahkan ini untuk membuat state reaktif

export default {
  components: {
    BookItem,
  },
  setup() {
    const bookStore = useBookStore();

    onMounted(() => {
      bookStore.fetchBooks();
    });

    //  Pastikan `books` tetap reaktif
    const { books } = storeToRefs(bookStore);

    return {
      books,
    };
  },
};
</script>
