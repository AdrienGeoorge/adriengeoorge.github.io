<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" title="Accueil">🏠</RouterLink>
      <RouterLink to="/about" title="A propos de moi">
        <img src="/me-small.png" alt="A propos de moi" class="me-small">
      </RouterLink>
      <RouterLink to="/about" title="Mes projets">🖥</RouterLink>
    </nav>
  </header>
  <RouterView/>
</template>

<style src="@/assets/base.scss">
</style>