<template>
  <div class="morning--app">
    <aside class="sidebar">
      <ProjectsList  />      
    </aside>

    <main class="main">
      <ProjectView />
    </main>
  </div>
</template>

<script>
  import ProjectsList from 'packs/components/projects_list'
  import ProjectView from 'packs/components/project_view'

  export default {
    components: {
      'ProjectsList': ProjectsList,
      'ProjectView': ProjectView
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
    flex: 0 0 12em;
    background: orange;
  }
</style>
