<template>
    <div class="split-view">
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>   

<style lang="scss" scoped>
  .split-view {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
</style>