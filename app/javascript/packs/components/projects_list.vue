<template>    
    <ul class="projects-list">
        <li v-for="(project, index) in projects" :key="index" class="project" @click="projectSelected($event, project)" :data-pid="project.id">
            <pill-cell :count="project.counter">{{ project.name }}</pill-cell>
        </li>
    </ul>
</template>

<script>
 import { mapGetters } from 'vuex'

 export default {
    methods: {
        setProjects(projects) {
            this.projects = projects
        },

        projectSelected(evt, project) {
            this.$store.commit('setProject', project)
        }
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