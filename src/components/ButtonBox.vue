<template>
  <RouterLink :to="linkUrl" class="box box-with-background" :style="{backgroundImage: 'url(' + backgroundUrl + ')'}">
    <div class="box-content">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <p class="description">
        <slot name="description"></slot>
      </p>
      <div class="box-button">
        <slot name="button"></slot>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: ['backgroundUrl', 'linkUrl']
}
</script>