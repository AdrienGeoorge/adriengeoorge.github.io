<script setup>
import CarrerLine from '../components/CarrerLine.vue'
import IconBox from '../components/SkillBox.vue'
</script>

<template>
  <div class="grid_1_1">
    <div class="box career">
      <div class="box-content">
        <div class="title">Mon parcours professionnel</div>
        <div class="description">Pour vous donner un historique...</div>

        <div class="career-lines">
          <CarrerLine :image="require('@/assets/images/companies/cpam.png')">
            <template #title>Analyste programmeur</template>
            <template #company>CPAM des Hauts-de-Seine, Nanterre (92)</template>
            <template #date>Septembre 2019 - Aujourd'hui</template>
            - Expérience en alternance durant 3 ans qui a débouchée sur un CDI<br>
            - Développement de deux nouvelles applications et maintenance évolutive d'une application nationale
          </CarrerLine>

          <CarrerLine :image="require('@/assets/images/companies/gaston-berger.png')">
            <template #title>Développeur web</template>
            <template #company>Lycée Gaston Berger - MarieTeam, Lille (59)</template>
            <template #date>Septembre 2018 - Mai 2019</template>
            - Expérience en milieu scolaire<br>
            - Elaboration de documents techniques<br>
            - Développement d'un site web ainsi que d'un client lourd
          </CarrerLine>

          <CarrerLine :image="require('@/assets/images/companies/beware.png')">
            <template #title>Développeur web</template>
            <template #company>Be-Ware Informatique, Saint-Quentin (02)</template>
            <template #date>Janvier - Février 2019</template>
            - Stage de validation du diplôme de BTS SIO<br>
            - Continuité des travaux commencés lors de mes précédents stages
          </CarrerLine>

          <CarrerLine :image="require('@/assets/images/companies/beware.png')">
            <template #title>Développeur web</template>
            <template #company>Be-Ware Informatique, Saint-Quentin (02)</template>
            <template #date>Juillet - Août 2018</template>
            - Première expérience en CDD pour un contrat d'été
          </CarrerLine>

          <CarrerLine :image="require('@/assets/images/companies/beware.png')">
            <template #title>Développeur web</template>
            <template #company>Be-Ware Informatique, Saint-Quentin (02)</template>
            <template #date>Mai 2018 - Juin 2018</template>
            - Premier stage dans le domaine du développement<br>
            - Découverte du framework Symfony et développement de bundles applicatifs
          </CarrerLine>
        </div>
      </div>
    </div>
    <div class="left">
      <div class="box skills">
        <div class="box-content">
          <div class="title">Mes domaines de compétences</div>
          <div class="description">Parce que les compétences ont leur importance...</div>
          <div class="grid-skills">
            <IconBox color="#db4b24">
              HTML5
            </IconBox>
            <IconBox color="#3595d0">
              CSS3
            </IconBox>
            <IconBox color="#8892c0">
              PHP
            </IconBox>
            <IconBox color="#201e23">
              Symfony
            </IconBox>
            <IconBox color="#e8d44e">
              JavaScript
            </IconBox>
            <IconBox color="#f6c83d">
              Python
            </IconBox>
            <IconBox color="#a88455">
              MariaDB
            </IconBox>
            <IconBox color="#336791">
              PostgresSQL
            </IconBox>
            <IconBox color="#7952b3">
              Bootstrap
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
