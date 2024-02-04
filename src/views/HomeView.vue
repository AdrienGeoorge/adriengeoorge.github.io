<script setup>
import SocialBox from '../components/SocialBox.vue'
import MapBox from '../components/MapBox.vue'
import ButtonBox from '../components/ButtonBox.vue'
</script>

<template>
  <div class="grid home-grid">
    <div class="box box-width-3">
      <div class="box-content about-me">
        <div class="my-memoji">
          <img class="my-memoji-image" src="@/assets/images/me.png" alt="Mon moi">
        </div>
        <div class="my-presentation">
          <div class="title">
            Hey, moi c'est Adrien <img src="@/assets/images/emojis/waving-hand.png" alt="Hey" class="waving-hand">
          </div>
          <div class="description">Développeur Full-Stack</div>
          <span>Je suis intéréssé par le domaine de l'informatique et les nouvelles technologies dont notamment l'IoT.</span>
        </div>
      </div>
    </div>

    <ButtonBox class="box-width-height-2" :background-url="require('@/assets/images/bg-large.png')" link-url="/about">
      <template #title>Parce que vous voulez en savoir plus à mon sujet...</template>
      <template #description>Apprenez-en plus sur mon parcours professionnel et mes champs de compétences</template>
      <template #button>En savoir plus</template>
    </ButtonBox>

    <ButtonBox class="box-width-height-2" :background-url="require('@/assets/images/bg-small.png')" link-url="/projects">
      <template #title>Parce que mes projets vous montrent mon travail...</template>
      <template #description>Découvrez quelques-uns de mes projets</template>
      <template #button>Découvrez-les</template>
    </ButtonBox>

    <SocialBox class="git" url="https://github.com/AdrienGeoorge">
      <template #icon>
        <img src="@/assets/images/github.png" alt="Mon GitHub">
      </template>
      GitHub
    </SocialBox>

    <MapBox></MapBox>

    <SocialBox class="linkedin" url="https://www.linkedin.com/in/adrien-george-8ab775184/">
      <template #icon>
        <img src="@/assets/images/linkedin.png" alt="Mon LinkedIn">
      </template>
      Linkedin
    </SocialBox>
  </div>
</template>
