<template>
  <button
    class="simall-switch"
    :class="{'simall-checked': modelValue}"
    @click="toggle"
  >
    <span></span>
  </button>
  <div>{{ modelValue }}</div>
</template>

<script lang="ts">

export default {
  props: {
    modelValue: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    }
  },
  setup(props, context) {
    const toggle = () => {
      if (!props.disabled) {
        context.emit('update:modelValue', !props.modelValue)
      }
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
@import "./simall.scss";

$h: 22px;
$h2: $h - 4px;
.simall-switch {
  height: $h;
  width: 2 * $h;
  border: none;
  outline: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: all 250ms;
  }
  &:active {
    > span {width: $h2 + 4px}
  }
  &.simall-checked:active {
    > span {width: $h2 + 4px; margin-left: -4px}
  }
  &.simall-checked {
    background: $theme-color;
    > span {
      left: calc(100% - #{$h2} - 2px)
    }
  }
}
</style>