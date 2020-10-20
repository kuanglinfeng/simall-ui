<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Simall UI</h1>
        <h2>一个基于 Vue3 的简洁轻巧的 UI</h2>
        <p class="actions">
          <router-link to="/doc">开始使用</router-link>
          <a target="_blank" href="https://github.com/kuanglinfeng">
            <svg>
              <use xlink:href="#icon-github"></use>
            </svg>
            Github
          </a>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
  components: { Topnav },
}
</script>

<style lang="scss" scoped>
@import "../variable.scss";

$border-radius: 20px;
$color: #007974;
.topnavAndBanner {
  color: $color;
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    padding: 10px 0;
  }
  > .actions {
    padding: 8px 0;
    margin-top: 10px;
    display: flex;
    a {
      border-radius: $border-radius;
      margin: 0 8px;
      color: white;
      background: $theme-color;
      display: inline-block;
      padding: 8px 24px;
      > svg {
        width: 1em; height: 1em;
        margin-right: 4px;
      }
      &:hover {
        text-decoration: none;
      }
      &:last-child {
        display: flex;
        align-items: center;
        background: white;
        color: $theme-color;
        border: 1px solid $theme-color;
      }
    }
  }
}
</style>