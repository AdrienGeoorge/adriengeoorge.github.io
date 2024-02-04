<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <nav>
      <RouterLink to="/" title="Accueil">
        <img src="@/assets/images/emojis/house.png" alt="Accueil" class="emoji-icon">
        <span>Accueil</span>
      </RouterLink>
      <RouterLink to="/about" title="A propos de moi">
        <img src="@/assets/images/me-small.png" alt="A propos de moi" class="me-small">
        <span>A propos de moi</span>
      </RouterLink>
      <RouterLink to="/carrer" title="Mon parcours">
        <img src="@/assets/images/emojis/books.png" alt="Mon parcours" class="emoji-icon">
        <span>Parcours</span>
      </RouterLink>
      <RouterLink to="/projects" title="Mes projets">
        <img src="@/assets/images/emojis/computer.png" alt="Mes projets" class="emoji-icon">
        <span>Projets</span>
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
