<template>
  <div class="toggleNav">
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
.toggleNav {
  text-align: center;
  position: absolute;
  top: 60px;
  width: 100%;
  background: white;
}

::v-deep(nav) {
  ol {
    width: 100%;
    li {
      text-align: center;
      width: 100%;
      padding: 4px 0;
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