<script setup>
import ButtonBox from '../components/ButtonBox.vue'
</script>

<template>
  <div class="grid">
    <div class="box box-width-4">
      <div class="box-content about-me">
        <div class="my-memoji">
          <img class="my-memoji-image" :src="require('@/assets/images/me-dev.png')" alt="Mon moi">
        </div>
        <div class="my-presentation">
          <div class="title">
            C'est toujours moi... <img src="@/assets/images/emojis/waving-hand.png" alt="Hey" class="waving-hand">
          </div>
          <div class="description">Mais en train de développer</div>
          <span>
            Mes projets peuvent vous donner un aperçu de mon travail
            <img src="@/assets/images/emojis/eyes.png" alt="Hey" class="eyes">
          </span>
        </div>
      </div>
    </div>

    <ButtonBox class="box-width-3-height-2" :background-url="require('@/assets/images/cosplay.png')" link-url="/projects/cosplay">
      <template #button>Découvrir</template>
    </ButtonBox>

    <ButtonBox class="box-width-2" :background-url="require('@/assets/images/merit.png')" link-url="/projects/merit">
      <template #button>Y jeter un coup d'oeil</template>
    </ButtonBox>

    <ButtonBox class="box-width-2" :background-url="require('@/assets/images/habbox.png')" link-url="/projects/habbox">
      <template #button>Explorer</template>
    </ButtonBox>
  </div>
</template>
