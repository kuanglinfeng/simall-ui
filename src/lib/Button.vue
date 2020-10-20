<template>
  <button
    class="simall-button"
    :class="classes"
    :disabled="disabled"
  >
    <span v-if="loading" class="simall-loadingIndicator" />
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size, level } = props
    const classes = computed(() => {
      return {
        [`simall-theme-${ theme }`]: theme,
        [`simall-size-${ size }`]: size,
        [`simall-level-${ level }`]: level
      }
    })
    return { classes }
  }
}
</script>

<style lang="scss">
@import "./simall.scss";

$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
$red: red;
$grey: grey;
button.simall-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $theme-color;
    border-color: $theme-color;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.simall-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $theme-color;
    &:hover, &:focus {
      color: lighten($theme-color, 10%);
    }
  }
  &.simall-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover, &:focus {
      background: darken(white, 5%);;
    }
  }
  &.simall-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px
  }
  &.simall-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.simall-theme-button {
    &.simall-level-main {
      background: $theme-color;
      color: white;
      border-color: $theme-color;
      &:hover,
      &:focus {
        background: darken($theme-color, 10%);
        border-color: darken($theme-color, 10%);
      }
    }
    &.simall-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.simall-theme-link {
    &.simall-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.simall-theme-text {
    &.simall-level-main {
      color: $theme-color;
      &:hover,
      &:focus {
        color: darken($theme-color, 10%);
      }
    }
    &.simall-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.simall-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.simall-theme-link, &.simall-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .simall-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $theme-color $theme-color $theme-color transparent;
    border-style: solid;
    border-width: 2px;
    animation: simall-spin 1s infinite linear;
  }
}

@keyframes simall-spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)
  }
}
</style>