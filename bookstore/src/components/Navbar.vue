<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" :class="{ active: isActive('/') }" aria-current="page">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="cart" class="nav-link" :class="{ active: isActive('/cart') }">Cart</RouterLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>