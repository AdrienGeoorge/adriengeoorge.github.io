<template>
  <div class="box box-with-background" :style="{backgroundImage: 'url(' + url + ')'}">
    <div class="box-content">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <p class="description">
        <slot name="description"></slot>
      </p>
      <RouterLink to="/about" class="box-button">
        <slot name="button"></slot>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url']
};
</script>