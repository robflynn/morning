<template>
    <div class="projects-list">
        <ul>
            <li v-for="project in projects" :project="projects">
                {{ project.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ["projects"]
    }
</script>   

<style scoped>
    .projects-list {
        background-color: red;
    }
</style>