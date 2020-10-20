<template>
  <div class="layout">
    <header>
      <div class="iconMenu" @click="toggle">
        <svg>
          <use xlink:href="#icon-menu"></use>
        </svg>
      </div>
      <ToggleNav v-if="menuVisible" />
      <div class="logo">
        <a href="http://localhost:3000">
          <img class="icon" src="../assets/logo.png" alt="Logo" />
        </a>
        <h1 class="title">Simall - UI</h1>
      </div>
      <ul class="menu">
        <li class="github">
          <a target="_blank" href="https://github.com/kuanglinfeng">
            <svg>
              <use xlink:href="#icon-github"></use>
            </svg>
            Github
          </a>
        </li>
      </ul>
    </header>
    <div class="content">
      <AsideNav />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import AsideNav from '../components/doc/nav/AsideNav.vue'
import ToggleNav from '../components/doc/nav/ToggleNav.vue'

import router from '../router'
import { ref } from 'vue'

export default {
  components: { Topnav, AsideNav, ToggleNav },
  setup() {
    const menuVisible = ref(false)
    const toggle = () => {
      menuVisible.value = !menuVisible.value
      router.afterEach(() => {
        menuVisible.value = false
      })
    }
    return { menuVisible, toggle }
  }
}
</script>

<style lang="scss" scoped>
@import "../variable.scss";

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > header {
    @media (max-width: 800px) {
      justify-content: center;
    }
    > .iconMenu {
      @media (max-width: 800px) {
        display: block;
      }
      display: none;
      cursor: pointer;
      position: absolute;
      top: calc(50% - 8px);
      right: 30px;
      svg {
        width: 14px; height: 14px;
      }
    }
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 25;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .15);
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .05);
    padding: 0 40px;
    > div.logo {
      display: flex;
      align-items: center;
      .icon {
        width: 40px;
        height: 40px;
      }
      > .title {
        font-size: 24px;
        color: $theme-color;
      }
    }
    > ul.menu {
      @media (max-width: 800px) {
        display: none;
      }
      > li {
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        color: rgba(0, 0, 0, .45);
      }
      > .github {
        display: flex;
        align-items: center;
        color: $theme-color;
        > a {
          display: flex;
          align-items: center;
          text-decoration: none;
          > svg {
            width: 1em; height: 1em;
            margin-right: 4px;
          }
        }
      }
    }
  }
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 256px;
    @media (max-width: 800px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    @media (max-width: 800px) {
      padding: 32px 10px;
    }
    padding: 32px 50px;
    flex-grow: 1;
    background: white;
  }
}

main {
  overflow: auto;
}
</style>