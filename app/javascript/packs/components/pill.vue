<template>
  <span class="pill"><slot></slot></span>  
</template>

<script>
  export default {
    name: 'pill'
  }
</script>

<style lang="scss">
.pill {
    $size: 5px;

    font-size: 0.75em;
    background: color(badge);
    padding: $size;
    border-radius: $size;
    min-width: 5 * $size;
    align-self: flex-end;
    text-align: center;
    font-weight: bold
}
</style>