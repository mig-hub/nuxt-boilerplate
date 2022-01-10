<template lang="pug">
.burger
  .top
  .middle
  .bottom
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.burger {
  display: none;
  @include mobile-portrait {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: vw($header-height-mobile);
    height: vw($header-height-mobile);
    .top, .middle, .bottom {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 33%;
      height: vw(1px);
      background-color: $fg-color;
      @include transition(0.2s ease-out);
    }
    .top {
      @include transform(translate(-50%, -450%) rotate(0));
    }
    .middle {
      @include transform(translate(-50%, -50%) rotate(0));
    }
    .bottom {
      @include transform(translate(-50%, 350%) rotate(0));
    }
    &.active {
      .top {
        @include transform(translate(-50%, -50%) rotate(45deg));
      }
      .middle {
        @include opacity(0);
      }
      .bottom {
        @include transform(translate(-50%, -50%) rotate(-45deg));
      }
    }
  }
}
</style>


