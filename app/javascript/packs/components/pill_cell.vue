<template>
    <div class="pill-cell">
        <span><slot></slot></span>

        <pill v-if="this.count > 0">{{ mutableCount }}</pill>
    </div>
</template>

<script>
    export default {        
      name: "pill-cell",

        props: {
            count: {
                default: 0,
                type: Number
            }
        },

        data() {
          return {
            mutableCount: this.count
          }
        },

        computed: {
          counter() {
            return this.count
          }
        },
    }
</script>

<style lang="scss">
    .pill-cell {
        display: flex;
        flex-direction: row;        
        flex: 1;
        padding: 5px;

        span:first-child {
            padding-top: 5px;
            width: 100%;
        }
    }
</style>