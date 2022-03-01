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
          <div class="my-name">Hey, moi c'est Adrien 👋</div>
          <div class="job-name">Développeur Full-Stack</div>
          <p>Je suis intéréssé par le domaine de l'informatique et les nouvelles technologies dont notamment l'IoT.</p>
        </div>
      </div>
    </div>

    <ButtonBox class="box-width-height-2" background-url="/bg-large.png" link-url="/about">
      <template #title>Parce que vous voulez en savoir plus...</template>
      <template #description>Apprenez-en plus sur mes formations et mon parcours professionnel</template>
      <template #button>A propos de moi</template>
    </ButtonBox>

    <ButtonBox class="box-width-height-2" background-url="/bg-small.png" link-url="/skills">
      <template #title>Parce que les compétences ont leur importance...</template>
      <template #description>Découvrez mes domaines de compétences</template>
      <template #button>En savoir plus</template>
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
