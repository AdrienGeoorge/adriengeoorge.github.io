<template>
  <div class="emoji">
    <img :src="require(`@/assets/images/emojis/${name}.png`)" alt="{{name}}">
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>
