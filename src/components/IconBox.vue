<template>
  <div class="box-icon" :style="{background: color}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['color']
}
</script>