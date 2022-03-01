<script setup>
import CarrerLine from "../components/CarrerLine.vue"
</script>

<template>
  <div class="grid_1_1">
    <div class="box">
      <div class="box-content">
        <div class="title">Mon parcours professionnel</div>
        <div class="description">Pour vous donner un historique...</div>

        <CarrerLine image="/cpam.jpeg">
          <template #title>Analyste programmeur</template>
          <template #company>CPAM des Hauts-de-Seine, Nanterre (92)</template>
          <template #date>2019<br>Aujourd'hui</template>
          Depuis maintenant 2 ans et demi, j'ai eu l'occasion de développer 2 projets entièrement seul. Depuis peu, j'ai
          rejoins un projet national où je travaille désormais en équipe
        </CarrerLine>

        <CarrerLine image="/gaston-berger.jpeg">
          <template #title>Développeur web</template>
          <template #company>Lycée Gaston Berger - MarieTeam, Lille (59)</template>
          <template #date>Septembre 2018<br>Mai 2019</template>
          Une expérience en milieu scolaire où nous devions élaborer des documents techniques avant de réaliser un site
          web, ainsi qu'un client lourd
        </CarrerLine>

        <CarrerLine image="/beware.jpeg">
          <template #title>Développeur web</template>
          <template #company>Be-Ware Informatique, Saint-Quentin (02)</template>
          <template #date>Janvier 2019<br>Février 2019</template>
          Dernier stage me permettant de valider mon diplôme de BTS, où j'ai continuer à avancer sur les travaux
          commencés durant mes précédents stages
        </CarrerLine>

        <CarrerLine image="/beware.jpeg">
          <template #title>Développeur web</template>
          <template #company>Be-Ware Informatique, Saint-Quentin (02)</template>
          <template #date>Août 2018</template>
          Première expérience en CDD pour un contrat d'été que l'on m'a proposé suite à mon précédent stage
        </CarrerLine>

        <CarrerLine image="/beware.jpeg">
          <template #title>Développeur web</template>
          <template #company>Be-Ware Informatique, Saint-Quentin (02)</template>
          <template #date>Mai 2018<br>Juin 2018</template>
          Premier stage dans le domaine du développement où j'ai fais mes débuts sur Symfony et participé à
          l'élaborations de divers modules
        </CarrerLine>

        <CarrerLine image="/beware.jpeg">
          <template #title>Technicien informatique</template>
          <template #company>Be-Ware Informatique, Saint-Quentin (02)</template>
          <template #date>Septembre 2016<br>Octobre 2016</template>
          Première expérience en tant que technicien durant laquelle j'ai fais du dépannage et de la remise à niveau
          d'ordinateurs
        </CarrerLine>
      </div>
    </div>
    <div>
      <div class="box">
        <div class="box-content">
          <div class="title">Mes domaines de compétences</div>
          <div class="description">Parce que les compétences ont leur importance...</div>
        </div>
      </div>
      <div class="box mt-1">
        <div class="box-content">
          <div class="title">Mes formations</div>
          <div class="description">Pour vous faire une idée de mon parcours...</div>
        </div>
      </div>
    </div>
  </div>
</template>