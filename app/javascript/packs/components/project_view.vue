<template>
    <div class="project-view">    
        <div v-if="project">    
              <split-view v-if="project">     
                <chat-view :project="project" ref="chat_view"/>

                <sidebar>
                  <collapsable-section name="Credentials" :action="newCredential">
                    <credentials-view ref="credentials_view" />
                  </collapsable-section>

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
    import CredentialsView from './credentials_view.vue'

    export default {
        components: {
            'chat-view': ChatView,
            'credentials-view': CredentialsView,
        },
        
        methods: {
            newCredential() {
                let key = prompt("credential label whats this thing called. eg: ftp")   
                let value = prompt("credential, such as a password")

                Morning.createCredential(this.project, key, value)
            }
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

                Morning.getCredentials(value).then((credentials) => {
                    this.$refs.credentials_view.credentials = credentials
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