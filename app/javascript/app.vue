<template>
  <div class="morning doze-app">
    <split-view>
      <sidebar>
        <collapsable-section name="Projects" :action="newProject">
          <projects-list :projectClicked="projectClicked" />
        </collapsable-section>

        <collapsable-section name="Messages">
          <ul>  
            <li>              
              <pill-cell>Trent</pill-cell>
            </li>                
            <li>
              <pill-cell :count="5">Elton</pill-cell>
            </li>
            <li>
              <pill-cell>David</pill-cell>
            </li>
          </ul>
        </collapsable-section>

        <collapsable-section name="Users">
          <users-list />
        </collapsable-section>
      </sidebar>

      <main class="doze-app--main morning--main">
          <project-view ref="project_view" />
      </main>
    </split-view>
  </div>
</template>

<script>
  import ProjectView from './packs/components/project_view.vue'
  import UsersList from './packs/components/users_list.vue'
  import ProjectsList from './packs/components/projects_list.vue'
  import CollapsableSection from './packs/components/collapsable_section.vue'    

  import { mapGetters, mapMutations, mapState } from 'vuex'

  export default {
    components: { 
        "users-list": UsersList,
        "projects-list": ProjectsList,
        "collapsable-section": CollapsableSection,
        "project-view": ProjectView,
      },

      computed: {
        ...mapState([
            'projects',
            'currentUser',
            'currentProject'
        ])
      },

      methods: {
        newProject() {
          let project_name = prompt("New Project Name")

          Morning.createProject(project_name)
        },
        projectClicked(project) {
          this.selectProject(project)
        },
        ...mapMutations([
          'setProjects',
          'selectProject',
          'addProject'
        ])
      },

      mounted() {        
        Morning.setupActionCable()

        App.projects_channel = App.cable.subscriptions.create("ProjectsChannel", {
            connected: () => {},
            disconnected: () => {},
            received: (data) => {
              switch(data.type) {
                case "PROJECT_CREATED":
                  this.$store.commit('addProject', data.project)

                  break;
                case "CREDENTIAL_CREATED": {
                  console.log(data.credential)
                }
              }
            }
        })        


        Morning.getProjects().then((projects) => {
          this.setProjects(projects)          

          // FIXME: For now we'll just load the first project every time
          // TODO: Remember last active project
          if (projects.length > 0) {
            let project = projects[0]

            this.selectProject(project)
          }
        })
      }
  }
</script>

<style lange="scss">  
  .col {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>

<style lang="scss">
  $padding: 0.5em;  
  $sidebarColor: #2B3940;

  .doze-app {
    background: #fff;
    display: flex;
    flex: 1;
  }

  .doze-app--sidebar {
    min-width: 200px;
  }

  .doze-app--main {
    width: 100%;
  }

  .morning--sidebar {
    background: $sidebarColor;    
  }

</style>


