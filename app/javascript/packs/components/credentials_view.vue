<template>
  <div>
    <table>
      <thead>
      </thead>

      <tbody>
        <tr v-for="(credential, index) in credentials" :key="index">
          <td>
            {{ credential.key }}
          </td>
          <td>
            {{ credential.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "credentials-view",
    data() {
      return {
        credentials: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  table {
    td {
      padding: 0.5em;
      border: solid 1px #ccc;
      white-space: nowrap;
    }
  }

</style>