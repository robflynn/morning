<template>
    <div class="projects-list" role="list">
        <div v-for="project in projects" :project="projects" role="listitem" class="project">
            <router-link :to="{ name: 'project', params: { id: project.id, project: project }}">{{ project.name }}</router-link>
        </div>
    </div>
</template>

<script>
     export default {
        props: {
            "projects": Array            
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