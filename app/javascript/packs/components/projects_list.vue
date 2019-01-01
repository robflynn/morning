<template>    
    <ul class="projects-list">
        <li v-for="(project, index) in projects" :key="index" class="project">
            <pill-cell :count="project.counter">{{ project.name }}</pill-cell>
        </li>
    </ul>
</template>

<script>
 import Mock from 'mock'
 import { mapGetters } from 'vuex'

 export default {
    methods: {
        setProjects(projects) {
            this.projects = projects
        },
    },

    computed: {
        ...mapGetters([
            'projects'
        ])
    },
}
</script>   

<style lang="scss">
.projects-list {
    li {
        cursor: pointer;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        a {
            color: #fff;
        }
    }
}    
</style>