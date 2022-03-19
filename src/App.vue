<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <nav>
      <RouterLink to="/" title="Accueil">
        <img src="@/assets/images/emojis/house.png" alt="Accueil" class="emoji-icon">
      </RouterLink>
      <RouterLink to="/about" title="A propos de moi">
        <img src="@/assets/images/me-small.png" alt="A propos de moi" class="me-small">
      </RouterLink>
      <RouterLink to="/carrer" title="Mon parcours">
        <img src="@/assets/images/emojis/books.png" alt="Mon parcours" class="emoji-icon">
      </RouterLink>
      <RouterLink to="/projects" title="Mes projets">
        <img src="@/assets/images/emojis/computer.png" alt="Mes projets" class="emoji-icon">
      </RouterLink>
    </nav>
    <RouterView v-slot="{ Component }">
      <transition name="zoom" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </div>
</template>

<style src="@/assets/base.scss" lang="scss"></style>
