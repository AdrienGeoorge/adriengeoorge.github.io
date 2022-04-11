<template>
  <div class="projects-view d-none">
    <div class="close-btn" @click="closeWindow">
      <img src="@/assets/images/projects/close.svg" alt="Fermer">
    </div>
    <div class="content">
      <div class="grid_1_2">
        <div class="left-side">
          <slot name="icon"></slot>
        </div>
        <div class="right-side">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div class="description">
            <slot name="small-description"></slot>
          </div>
          <slot name="big-description"></slot>
        </div>
      </div>
      <div class="grid-photos">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeWindow: event => {
      event.target.closest('.projects-view').classList.add('d-none')
      document.body.style.overflow = 'unset'
    }
  }
}
</script>
