<template>
    <section v-bind:class="{'collapsed': this.collapsed }" class="collapsable-section">
        <h2>{{ name }} <span class="handle"></span>+</h2>
        <div>
            <slot></slot>
        </div>
    </section></template>

<script>
    export default {
        name: "collapsable-section",
        props: {
            name: {
                required: false,
                default: '',
                type: String
            },
            collapsed: {
              required: false,
              default: false,
              type: Boolean
            },
        }
    }
</script>

<style lang="scss">
  .collapsable-section {    
    .handle:after {
      content: "-";
    }

    &.collapsed {
      .handle:after {
        content: "+"
      }
    }
  }
</style>