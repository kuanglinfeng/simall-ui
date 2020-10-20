<template>
  <div class="asideNav">
    <BaseNav />
  </div>
</template>

<script>
import BaseNav from './BaseNav.vue'

export default {
  components: { BaseNav }
}
</script>

<style lang="scss" scoped>
.asideNav ::v-deep(nav) {
  display: block;
  @media (max-width: 800px) {
    display: none;
  }
  box-shadow: 1px 0 1px 1px rgba(0, 0, 0, .05);
  width: 250px;
  padding: 70px 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
  > h2 {
    font-size: 16px;
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    &.components {
      margin-left: 1em;
    }
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        overflow: hidden;
        color: #36b1bf;
        background: #f0fffe;
      }
    }
  }
}
</style>