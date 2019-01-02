<template>
    <aside class="doze-app--sidebar morning--sidebar">        
        <div class="doze-accordion">
            <slot></slot>
        </div>
    </aside>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>

<style lang="scss">
  .doze-accordion {
    section {
      h1,h2,h3,h4,h5 {
        padding: $padding;
        background: colors(sidebar);

        + div {
          color: #ccc;

          > ul {
            li {
              padding: $padding;
            }
          }
        }
      }

      & + section {
        margin-top: 1em;
      }
    }
  }
</style>
