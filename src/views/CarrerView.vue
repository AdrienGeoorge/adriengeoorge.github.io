<script setup>
import CarrerLine from "../components/CarrerLine.vue"
import IconBox from "../components/IconBox.vue"
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
          <template #date>Septembre 2019 - Aujourd'hui</template>
          Cela fait désormais deux ans que j'ai rejoins mon entreprise actuelle, dans laquelle j'ai eu l'occasion de
          développer deux projets entièrement seul. Depuis peu, j'ai rejoins un projet national où je travaille
          désormais en équipe
        </CarrerLine>

        <CarrerLine image="/gaston-berger.jpeg">
          <template #title>Développeur web</template>
          <template #company>Lycée Gaston Berger - MarieTeam, Lille (59)</template>
          <template #date>Septembre 2018 - Mai 2019</template>
          Une expérience en milieu scolaire où nous devions élaborer des documents techniques avant de réaliser un site
          web, ainsi qu'un client lourd
        </CarrerLine>

        <CarrerLine image="/beware.jpeg">
          <template #title>Développeur web</template>
          <template #company>Be-Ware Informatique, Saint-Quentin (02)</template>
          <template #date>Janvier 2019 - Février 2019</template>
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
          <template #date>Mai 2018 - Juin 2018</template>
          Premier stage dans le domaine du développement où j'ai fais mes débuts sur Symfony et participé à
          l'élaborations de divers modules
        </CarrerLine>
      </div>
    </div>
    <div>
      <div class="box">
        <div class="box-content">
          <div class="title">Mes domaines de compétences</div>
          <div class="description">Parce que les compétences ont leur importance...</div>
          <div class="grid-skills">
            <IconBox color="#8892c0">
              PHP
            </IconBox>
            <IconBox color="#db4b24">
              HTML
            </IconBox>
            <IconBox color="#3595d0">
              CSS
            </IconBox>
            <IconBox color="#e8d44e">
              JavaScript
            </IconBox>
            <IconBox color="#e06a03">
              Java
            </IconBox>
            <IconBox color="#f6c83d">
              Python
            </IconBox>
            <IconBox color="#984a93">
              C#
            </IconBox>
            <IconBox color="#201e23">
              Symfony
            </IconBox>
            <IconBox color="#7952b3">
              Bootstrap
            </IconBox>
            <IconBox color="#003445">
              MariaDB
            </IconBox>
            <IconBox color="#336791">
              PostgresSQL
            </IconBox>
            <IconBox color="#e84f32">
              Git
            </IconBox>
            <IconBox color="#2491e6">
              Docker
            </IconBox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>