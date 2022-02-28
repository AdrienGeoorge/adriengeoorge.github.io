<template>
  <a :href="url" target="_blank" class="box">
    <div class="social-box">
      <slot name="icon"></slot>
      <div class="title">
        <slot></slot>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['url']
}
</script>