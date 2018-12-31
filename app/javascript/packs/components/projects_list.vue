<template>
    <ul class="projects-list">
        <li v-for="(project, index) in projects" :key="index" class="project">
            <pill-cell :count="project.counter">{{ project.name }}</pill-cell>
        </li>
    </ul>
</template>

<script>
 import PillCell from './pill_cell.vue'

 export default {
    data() {
        return {
            projects: []
        }
    },

    components: {
        "pill-cell": PillCell
    },

    methods: {
        getProjects() {
            Morning.getProjects()                                        
               .then((projects) => {
                    this.projects = projects
                })
        }
    },

    mounted() {
        this.getProjects()
    },
}
</script>   

<style lang="scss" scoped>
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