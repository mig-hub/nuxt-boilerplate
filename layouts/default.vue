<template lang="pug">
#layout
  page-header
  main
    nuxt
</template>

<script>
export default {
  middleware: 'initState',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

.page-header {
  z-index: 2;
}
main {
  z-index: 1;
}

.page {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}

</style>

