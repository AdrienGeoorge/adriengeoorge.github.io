<template>
  <div class="box">
    <div class="box-content box-map text-center">
      <img src="@/assets/images/position.png" alt="Ma position" class="position-icon">
      <div class="title">Paris et petite couronne</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.map = this.getMediaPreference()
  },

  data () {
    return {
      map: 'map-light'
    }
  },

  methods: {
    getMediaPreference () {
      const hasDarkPreference = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      if (hasDarkPreference) {
        return '/map-dark.png'
      } else {
        return '/map-light.png'
      }
    }
  }
}
</script>
