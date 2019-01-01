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
  $padding: 5px;
  $sidebarColor: #2B3940;

  .doze-accordion {
    section {
      h1,h2,h3,h4,h5 {
        background: lighten($sidebarColor, 50%);
        padding: $padding;

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
