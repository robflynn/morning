<template>
    <div class="split-panel-view">
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>   

<style lang="scss" scoped>
.split-panel-view {
    background: green;
    display: flex;
    flex: 1;
}
</style>