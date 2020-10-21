<template>
  <div class="topnav">
    <div class="logo">
      <a href="https://kuanglinfeng.gitee.io/simall-ui-website/">
        <img src="../assets/logo.png" alt="Logo" />
      </a>
    </div>
    <div class="menu"></div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px 24px;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-content: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    img {
      width: 40px;
      height: 40px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
      }
    }
  }
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {margin: 0 auto}
    > .toggleAside {display: inline-block}
  }
}
</style>