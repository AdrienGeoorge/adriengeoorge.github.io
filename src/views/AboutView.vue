<script setup>
import IconImage from '../components/IconImage.vue'
</script>

<template>
  <div class="content">
    <div class="box">
      <div class="box-content">
        <div class="title">
          Hey, moi c'est Adrien <img src="@/assets/images/emojis/waving-hand.png" alt="Hey" class="waving-hand">
        </div>
        <div class="description">Développeur Full-Stack</div>
        <p>
          Mon histoire a commencé par un diplôme portant sur l'électronique. Diplôme m'offrant la possibilité
          de choisir une option dans laquelle je pouvais manipuler ordinateurs, serveurs et bien d'autres composants
          informatiques.
        </p>
        <p>
          C'est ici que tout a commencé, mon envie et mon ambition d'évoluer dans le domaine de l'informatique sont
          nées.
        </p>
        <p>
          En 2017, après l'obtention de mon baccalauréat je me suis dirigé vers une nouvelle formation. Celle-ci me
          permettait soit de continuer dans le domaine des télécommunications et matériels résaux, soit de m'orienter
          vers le développement web et mobile. Le choix fut difficile, mais j'ai fini par choisir le développement.
        </p>
        <p>
          Depuis, je m'améliore et j'apprends constamment de nouvelles choses. Je suis passioné, et j'ai l'envie
          d'approfondir dans ce domaine si vaste qui évolue en permanence.
        </p>
      </div>
    </div>
    <div class="grid_1_1">
      <div class="box">
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
        <div class="box">
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
