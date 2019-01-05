<template>    
    <ul class="projects-list">
        <li v-for="(project, index) in projects" :key="index" class="project" @click="projectSelected($event, project)" :data-pid="project.id">
            <pill-cell :count="project.counter">{{ project.name }}</pill-cell>
        </li>
    </ul>
</template>

<script>
 import { mapState } from 'vuex'

 export default {
    props: {
        projectClicked: {
            required: false,
            type: Function
        }
    },

    methods: {
        setProjects(projects) {
            this.projects = projects
        },

        projectSelected(evt, project) {
            if (this.projectClicked) {
                this.projectClicked(project)
            }
        }
    },

    computed: {
        ...mapState([
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