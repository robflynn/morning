<template>
    <section v-bind:class="{'collapsed': this.collapsed }" class="collapsable-section">
        <h2>{{ name }} <button v-if="this.action" @click="actionPerformed" class="collapsable-section__action-button" ref="action_button">+</button></h2>
        <div>
            <slot></slot>
        </div>
    </section></template>

<script>
    export default {
        name: "collapsable-section",

        methods: {
          actionPerformed() {
            this.action()
          },
        },

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
            action: {
              required: false,
              type: Function
            }
        }
    }
</script>

<style lang="scss" scoped>
  .collapsable-section {    
    h2 {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      color: #fff;
      font-weight: bold;
    }

    .handle:after {
      content: "-";
    }

    &.collapsed {
      .handle:after {
        content: "+"
      }
    }
  }

  .collapsable-section__action-button {
    align-self: flex-end;
  }

</style>