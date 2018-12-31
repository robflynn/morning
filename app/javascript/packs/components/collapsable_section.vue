<template>
    <section v-bind:class="{'collapsed': this.collapsed }" class="collapsable-section">
        <h2>{{ name }} <span v-if="this.collapsed" class="plus"></span></h2>
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
            }
        }
    }
</script>

<style lang="scss">
  .collapsable-section {
    .plus:after {
      content: "+";
    }
  }
</style>