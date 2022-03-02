<script setup>
import SocialBox from "../components/SocialBox.vue"
import MapBox from "../components/MapBox.vue"
import ButtonBox from "../components/ButtonBox.vue"
</script>

<template>
  <div class="grid">
    <div class="box box-width-3">
      <div class="box-content about-me">
        <div class="my-memoji">
          <div class="my-memoji-1">
            <img class="my-memoji-image" src="/me.png" alt="Mon moi">
          </div>
          <div class="my-memoji-2">
            <img class="my-memoji-image" src="/me-dev.png" alt="Mon moi">
          </div>
        </div>
        <div class="my-presentation">
          <div class="title">Hey, moi c'est Adrien 👋</div>
          <div class="description">Développeur Full-Stack</div>
          <span>Je suis intéréssé par le domaine de l'informatique et les nouvelles technologies dont notamment l'IoT.</span>
        </div>
      </div>
    </div>

    <ButtonBox class="box-width-height-2" background-url="/bg-large.png" link-url="/about">
      <template #title>Parce que vous voulez en savoir plus...</template>
      <template #description>Apprenez-en plus sur mon parcours professionnel et mes champs de compétences</template>
      <template #button>En savoir plus</template>
    </ButtonBox>

    <ButtonBox class="box-width-height-2" background-url="/bg-small.png" link-url="/carrer">
      <template #title>Parce que mes projets peuvent vous éclaircir...</template>
      <template #description>Découvrez quelques uns de mes projets</template>
      <template #button>Découvrez-les</template>
    </ButtonBox>

    <SocialBox class="git" url="https://github.com/AdrienGeoorge">
      <template #icon>
        <img src="/github.png" alt="Mon GitHub">
      </template>
      GitHub
    </SocialBox>

    <MapBox></MapBox>

    <SocialBox class="linkedin" url="https://www.linkedin.com/in/adrien-george-8ab775184/">
      <template #icon>
        <img src="/linkedin.png" alt="Mon LinkedIn">
      </template>
      Linkedin
    </SocialBox>
  </div>
</template>
