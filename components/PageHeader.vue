<template lang="pug">
header(
  ref='header'
  :class='{ active: navOpen }'
  )
  Burger(
    @click.native='toggleNav'
    :class='{ active: navOpen }'
    )
  nav
    ol(
      @click='closeNav'
      )
      li
        NuxtLink(
          to='/'
          ) Home
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen
    },
    closeNav() {
      this.navOpen = false
    },
  },
  mounted() {
    this.$nextTick( () => {
      this.closeNav()
    } )
    window.addEventListener( 'resize', this.closeNav )
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  height: vw($header-height);
  width: 100%;
  @include mobile-portrait {
    height: vw($header-height-mobile);
  }
  nav {
    float: right;
    @include mobile-portrait {
      float: none;
      position: fixed;
      top: vw($header-height-mobile);
      bottom: 0;
      left: 0;
      right: 0;
      background-color: $bg-color;
      display: flex;
      justify-content: center;
      align-items: center;
      @include transform(translateY(100%));
      @include transition(0.2s ease-out);
    }
    ol {
      li {
        display: inline;
        line-height: vw($header-height);
        @include mobile-portrait {
          display: block;
          line-height: inherit;
          text-align: center;
        }
      }
      li + li {
        margin-left: 2em;
        @include mobile-portrait {
          margin-left: 0;
        }
      }
    }
  }
  &.active {
    nav {
      @include transform(translateY(0%));
    }
  }
}
</style>


