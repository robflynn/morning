<template>
    <div class="project-view">    
        <div v-if="project">    
            <header>
                {{ project.name }}
            </header>

              <split-view v-if="project">     
                <chat-view :project="project" ref="chat_view"/>

                <sidebar>
                  <collapsable-section name="Credentials" :collapsed="true" />
                  <collapsable-section name="Tasks" :collapsed="true" />
                  <collapsable-section name="Members" :collapsed="true" />
                  <collapsable-section name="Assets" :collapsed="true" />
                </sidebar>
            </split-view>
            <span v-else>no projects exist, put some kind of nice pretty message here talking about how to create a project.</span>
        </div>
        <div v-else>
            <p>No project selected yet. Do something with this later. Or don't.</p>
        </div>
    </div>
</template>

<script>
    import ChatView from './chat_view.vue'

    export default {
        components: {
            'chat-view': ChatView,
        },
        
        computed: {
            project() {
                return this.$store.state.currentProject
            }
        },    

        watch: {
            project(value, oldValue) {
                Morning.getMessages(value).then((messages) => {
                    this.$refs.chat_view.messages = messages
                })
            },
        },
    }
</script>   

<style lang="scss">
    .project-view {
        width: 100%;
        height: 100%;
    }
</style>