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
      latestScroll: 0
    }
  },
  methods: {

    getScroll(el) {
      // get scroll value on current .page element if no arg is passed.
      // el can either be the page element itself or its index.
      if (typeof el == 'object') {
        return el.scrollTop;
      }
      var pages = document.getElementsByClassName('page');
      if (pages.length < 1) {
        return 0;
      }
      if (typeof el == 'number') {
        return pages[el].scrollTop;
      }
      return pages[0].scrollTop;
    },

    storeOrientationInfo() {
      if (window.innerWidth > window.innerHeight) {
        this.$store.commit('setOrientation', 1);
      } else if (window.innerWidth < window.innerHeight) {
        this.$store.commit('setOrientation', -1);
      } else {
        this.$store.commit('setOrientation', 0);
      }
      let mobileBreakpointPx = getComputedStyle(document.documentElement).getPropertyValue('--mobile-breakpoint');
      let mobileBreakpoint = parseInt(mobileBreakpointPx);
      if (window.innerWidth > mobileBreakpoint) {
        this.$store.commit('setMobileBreakpoint', 1);
      } else if (window.innerWidth < mobileBreakpoint) {
        this.$store.commit('setMobileBreakpoint', -1);
      } else {
        this.$store.commit('setMobileBreakpoint', 0);
      }
    },

    storeScrollInfo() {
      let st = this.getScroll();
      this.$store.commit('setScrollTop', st);
      if (st > this.latestScroll) {
        this.$store.commit('setScrollDirection', 1);
      } else if (st < this.latestScroll) {
        this.$store.commit('setScrollDirection', -1);
      } else {
        this.$store.commit('setScrollDirection', 0);
      }
      this.latestScroll = st;
    },

    setReal100vh() {
      let value = "100vh";
      if (window.innerWidth <= 1024) {
        value = window.innerHeight + 'px';
      }
      document.documentElement.style.setProperty("--real100vh", value);
    },

    onEachFrame() {
      this.storeScrollInfo();
      this.storeOrientationInfo();
      this.setReal100vh();
      window.requestAnimationFrame(this.onEachFrame);
    }
  },
  mounted() {
    // No need to destroy because the layout is not destroyed on nav
    window.requestAnimationFrame(this.onEachFrame);
  }
}
</script>

<style lang="scss" scoped>

#layout > header {
  z-index: 2;
}
main {
  position: relative;
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

