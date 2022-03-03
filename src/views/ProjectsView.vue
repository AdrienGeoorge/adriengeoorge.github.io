<script setup>
import ButtonBox from "../components/ButtonBox.vue"
</script>

<template>
  <div class="grid">
    <div class="box box-width-4">
      <div class="box-content about-me">
        <div class="my-memoji">
          <img class="my-memoji-image" src="/me-dev.png" alt="Mon moi">
        </div>
        <div class="my-presentation">
          <div class="title">
            C'est toujours moi... <img src="/emojis/waving-hand.png" alt="Hey" class="waving-hand">
          </div>
          <div class="description">Mais en train de développer</div>
          <span>Mes projets peuvent vous donner un apperçu de mon travail 👀</span>
        </div>
      </div>
    </div>

    <ButtonBox class="box-width-3-height-2" background-url="/cosplay.png" link-url="/carrer">
      <template #button>Découvrir</template>
    </ButtonBox>

    <ButtonBox class="box-width-2" background-url="/merit.png" link-url="/carrer">
      <template #button>Y jeter un oeil</template>
    </ButtonBox>

    <ButtonBox class="box-width-2" background-url="/habbox.png" link-url="/carrer">
      <template #button>Ça en vaut le coup d'oeil</template>
    </ButtonBox>
  </div>
</template>