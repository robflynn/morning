<template>
    <ul class="projects-list">
        <li v-for="(project, index) in projects" :key="index" class="project">
            <div class="pill-cell">
                <span>{{ project.name }}</span>

                <span v-if="project.counter > 0" class="pill">{{ project.counter }}</span>
            </div>
        </li>
    </ul>
</template>

<script>
     export default {
        data() {
            return {
                projects: []
            }
        },

        methods: {
            getProjects() {
                Morning.getProjects()                                        
                   .then((projects) => {
                    console.log("A")
                    console.log(projects)
                                        console.log("2")
                        this.projects = projects
                    })
            }
        },

        mounted() {
            this.getProjects()
        },

        updated() {           
            console.log("Q")
            console.log("testing")
            console.log(this)
            console.log(this.projects)
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

    .pill-cell {
        display: flex;
        flex-direction: row;        
        flex: 1;

        span:first-child {
            width: 100%;
        }

        .pill {
            $size: 5px;

            font-size: 0.75em;
            background: rgba(255, 0, 0, 0.8);
            padding: $size;
            border-radius: $size;
            min-width: 5 * $size;
            align-self: flex-end;
            text-align: center;
            font-weight: bold
        }
    }
</style>