<template>
    <div class="project-view">

            <header>
                {{ project.name }}
            </header>

          <split-view v-if="project">     
            <chat-view />

            <sidebar>
              <collapsable-section name="Credentials" :collapsed="true" />
              <collapsable-section name="Tasks" :collapsed="true" />
              <collapsable-section name="Members" :collapsed="true" />
              <collapsable-section name="Assets" :collapsed="true" />
            </sidebar>
        </split-view>
        <span v-else>no projects exist, put some kind of nice pretty message here talking about how to create a project.</span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'    
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
    }
</script>   

<style lang="scss">
    .project-view {
        width: 100%;
        height: 100%;
    }
</style>