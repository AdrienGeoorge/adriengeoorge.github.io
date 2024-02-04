<script setup>
import IconImage from '../components/IconImage.vue'
</script>

<template>
  <div class="content">
    <div class="box about-me">
      <div class="box-content">
        <div class="title">
          Hey, moi c'est Adrien <img src="@/assets/images/emojis/waving-hand.png" alt="Hey" class="waving-hand">
        </div>
        <div class="description">Développeur Full-Stack</div>
        <div class="description">Diplômé d'un Mastère Développement Web & Mobile et d'un Mastère Architecte Big Data</div>
        <p>
          Je suis passionné par l'informatique et les nouvelles technologies depuis l'adolescence.<br>
          Abonné à l'actualité tech, je passe beaucoup de temps à lire des articles sur les avancées technologiques.
        </p>
        <p>
          Développeur Full-Stack, je conçois et réalise des applications web.<br>
          Le design est une chose qui m'intéresse grandement. Je travaille beaucoup sur ce point afin de m'améliorer.
        </p>
        <p>
          Mes expériences m'ont permises de découvrir la gestion de projets et d'être en charge du pilotage,
          du développement et du suivi d'un projet from scratch.
        </p>
      </div>
    </div>
    <div class="grid_1_1">
      <div class="box hobbies">
        <div class="box-content">
          <div class="title">Mes passe-temps</div>
          <div class="description">Ce que je fais de mon temps libre...</div>
          <div class="grid-about">
            <IconImage name="popcorn"></IconImage>
            <IconImage name="music"></IconImage>
            <IconImage name="beers"></IconImage>
            <IconImage name="sport"></IconImage>
            <IconImage name="airplane"></IconImage>
            <IconImage name="park"></IconImage>
            <IconImage name="photo"></IconImage>
            <IconImage name="shopping"></IconImage>
            <IconImage name="game"></IconImage>
            <IconImage name="museum"></IconImage>
          </div>
        </div>
      </div>
      <div class="left">
        <div class="box languages">
          <div class="box-content">
            <div class="title">Mes langues parlées</div>
            <div class="description">Même si ce n'est que des notions...</div>
            <div class="grid-about">
              <IconImage name="flag-UK"></IconImage>
              <IconImage name="flag-ES"></IconImage>
              <IconImage name="flag-IT"></IconImage>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
