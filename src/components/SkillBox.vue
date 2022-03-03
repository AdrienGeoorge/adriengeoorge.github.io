<template>
  <div class="box-skill" :style="{background: color}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['color']
}
</script>