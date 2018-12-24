<template>
  <div id="morning--app">
    <p>Hello, I am a nice message.</p>

    <div v-for="project in projects">
      {{ project.name }}
    </div>

  </div>
</template>

<script>
export default {
  props: ["projects"]
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
