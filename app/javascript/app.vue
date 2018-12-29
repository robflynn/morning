<template>
  <div class="morning--app">
    <div class="sidebar">
      <ProjectsList  />
    </div>
    <div>
      Main Content

      Goes Here
    </div>
  </div>
</template>

<script>
  import ProjectsList from 'packs/components/projects_list'

  export default {
    components: {
      'ProjectsList': ProjectsList
    },
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
