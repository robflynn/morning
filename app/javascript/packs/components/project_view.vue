<template>
    <div class="project-view">
        <span v-if="project">{{ project.name }}</span>
        <span v-else>No project ASsigned</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                project: null
            }
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