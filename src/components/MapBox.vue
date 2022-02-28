<template>
  <div class="box">
    <img :src="this.map" alt="Ma localisation" class="my-position">
  </div>
  <div class="box">
    <div class="box-content text-center">
      <p>📍</p>
      <div class="title">Paris et petite couronne</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.map = this.getMediaPreference();
  },

  data() {
    return {
      map: "map-light",
    };
  },

  methods: {
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "/map-dark.png";
      } else {
        return "/map-light.png";
      }
    },
  }
};
</script>