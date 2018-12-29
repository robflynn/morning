<template>
    <div class="projects-list" role="list">
        <div v-for="project in projects" :project="projects" role="listitem" class="project">
            <a href="/projects/{ {project.id }}/chat">{{ project.name }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: [
                    {
                        id: 1,
                        name: "project 1"
                    },
                    {
                        id: 2,
                        name: "project 2"
                    },
                    {
                        id: 3,
                        name: "project 3"
                    }
                ]
            }
        }
    }
</script>   

<style lang="scss" scoped>
    .projects-list {
        background-color: red;
        display: flex;
        flex-direction: column;

        .project {
            padding: 5px;

            a {
                color: #fff;
            }
        }
    }    
</style>