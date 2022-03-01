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
      <RouterLink to="/carrer" title="Mon parcours">📚</RouterLink>
      <RouterLink to="/projects" title="Mes projets">🖥</RouterLink>
    </nav>
    <RouterView v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style src="@/assets/base.scss">
</style>