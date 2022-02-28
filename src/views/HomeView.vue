<script setup>
import SocialBox from "../components/SocialBox.vue"
import MapBox from "../components/MapBox.vue"
import ButtonBox from "../components/ButtonBox.vue"
</script>

<template>
  <div class="grid">
    <div class="box box-width-2">
      <div class="box-content about-me">
        <div class="my-memoji-relative">
          <img class="my-memoji-image" src="/me.png" alt="Mon moi">
        </div>
        <div>
          <div class="my-name">Hey, moi c'est Adrien 👋</div>
          <div class="job-name">Développeur Full-Stack</div>
          <p>Je suis intéréssé par le domaine de l'informatique et les nouvelles technologies dont notamment l'IoT.</p>
        </div>
      </div>
    </div>

    <MapBox></MapBox>

    <ButtonBox class="box-height-2" url="/bg-large.png">
      <template #title>Parce que vous voulez en savoir plus...</template>
      <template #description>Apprenez-en plus sur mes formations et mon parcours professionnel</template>
      <template #button>A propos de moi</template>
    </ButtonBox>

    <SocialBox class="linkedin" url="https://www.linkedin.com/in/adrien-george-8ab775184/">
      <template #icon>
        <img src="/linkedin.png" alt="Mon LinkedIn">
      </template>
      Linkedin
    </SocialBox>

    <SocialBox class="git" url="https://github.com/AdrienGeoorge">
      <template #icon>
        <img src="/github.png" alt="Mon GitHub">
      </template>
      GitHub
    </SocialBox>

    <ButtonBox url="/bg-small.png">
      <template #title>Mon champ de compétences</template>
      <template #description>Parce que c'est important...</template>
      <template #button>En savoir plus</template>
    </ButtonBox>
  </div>
</template>
