<template>
  <div id="morning--app">
    <p>Hello, I am a nice message.</p>

    <ProjectsList :projects="projects" />

  </div>
</template>

<script>
  import ProjectsList from 'packs/components/projects_list'

export default {
  components: { ProjectsList },
  props: ["projects"]
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
