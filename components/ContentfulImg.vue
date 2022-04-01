<template lang="pug">
img(v-bind:src='imgSrc' v-bind:alt='imgAlt' v-bind:title='imgTitle')
</template>

<script>
export default {
  props: {
    image: {
      type: Object
    },
    title: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    imgSrc() {
      return this.image.fields.file.url
    },
    imgAlt() {
      return this.alt || this.image.fields.title
    },
    imgTitle() {
      return this.title
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

