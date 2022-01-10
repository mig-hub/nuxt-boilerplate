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

#layout > header {
  z-index: 2;
}
main {
  z-index: 1;
}

.page {
  padding-top: vw($header-height);
  @include mobile-portrait {
    padding-top: vw($header-height-mobile);
  }
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

