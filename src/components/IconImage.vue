<template>
  <div class="emoji">
    <img :src="`/emojis/${name}.png`" alt="{{name}}">
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>