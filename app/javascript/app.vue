<template>
  <div class="morning--app">
    <SplitPanelView>
      <aside class="sidebar">
        <ProjectsList  />      
      </aside>        

      <main class="main">
        <ProjectView>
          Hey
        </ProjectView>
      </main>        
    </SplitPanelView>
  </div>
</template>

<script>
  import ProjectsList from 'packs/components/projects_list'
  import ProjectView from 'packs/components/project_view'
  import SplitPanelView from 'packs/components/split_panel_view'  

  export default {
    components: {
      'ProjectsList': ProjectsList,
      'ProjectView': ProjectView,
      'SplitPanelView': SplitPanelView,
    },
    props: [
      "project"
    ],
    mounted() {
      console.log("yo")
    }
  }
</script>

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


