<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div class="main">
    <nav>
      <RouterLink to="/" title="Accueil">🏠</RouterLink>
      <RouterLink to="/about" title="A propos de moi">
        <img src="/me-small.png" alt="A propos de moi" class="me-small">
      </RouterLink>
      <RouterLink to="/projects" title="Mes compétences">📚</RouterLink>
      <RouterLink to="/projects" title="Mes projets">🖥</RouterLink>
    </nav>
    <RouterView/>
  </div>
</template>

<style src="@/assets/base.scss">
</style>