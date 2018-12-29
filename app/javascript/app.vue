<template>
  <div class="morning--app">
    <SplitPanelView>
      <aside class="sidebar">
        <ProjectsList :projects="projects" />      
      </aside>        

      <main class="main">
        <router-view></router-view>
      </main>        
    </SplitPanelView>
  </div>
</template>

<script>
  import ProjectsList from 'packs/components/projects_list'
  import ProjectView from 'packs/components/project_view'
  import SplitPanelView from 'packs/components/split_panel_view'  

  export default {
    routes: [],

    components: {
      'ProjectsList': ProjectsList,
      'ProjectView': ProjectView,
      'SplitPanelView': SplitPanelView,
    },

    data() {
      let projects = [
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

      return {
        projects: projects,
        currentProject: null
      }
    },

    mounted() {
      if (this.projects.length > 0) {
        this.currentProject = this.projects[0]
      }      
    }
  }
</script>

<style lange="scss">
  .col {
    display: flex;
    flex-direction: column;
  }
</style>

<style lang="scss" scoped>
  .morning--app {
    background: green;
    display: flex;
    flex: 1;
  }

  .sidebar {
    width: 250px;
  }

  .main {
    width: 100%;
    height: 100%;
  }
</style>


