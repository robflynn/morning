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
  div {
    table {
      width: 100%;
      $border-style: solid 1px;

      td {
        padding: 0.5em;
        border: $border-style rgba(0, 0, 0, 0.4);
        white-space: nowrap;        
      }

      tr {
        td:first-child {
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.9);
          color: #444;
        }

        td:last-child {
          width: 100%;
          border-bottom: $border-style rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
</style>