<template>
    <ul class="projects-list">
        <li v-for="index in 5" class="project">
            Project {{ index }}
        </li>
    </ul>
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
        display: flex;
        flex-direction: column;

        .project {
            padding: 5px;
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