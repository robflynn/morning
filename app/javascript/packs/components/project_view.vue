<template>
    <div class="project-view">
        I am the project view
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log("project view mounted")
        }
    }
</script>   

<style lang="scss" scoped>
    .project-view {
        background: purple;
        width: 100%;
        height: 100%;
    }
</style>