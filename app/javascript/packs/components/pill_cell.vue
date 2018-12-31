<template>
    <div class="pill-cell">
        <span><slot></slot></span>

        <span v-if="this.count > 0" class="pill">{{ mutableCount }}</span>
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

        updated() {
            console.log("it changedededed")
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

        .pill {
            $size: 5px;

            font-size: 0.75em;
            background: rgba(255, 0, 0, 0.8);
            padding: $size;
            border-radius: $size;
            min-width: 5 * $size;
            align-self: flex-end;
            text-align: center;
            font-weight: bold
        }
    }
</style>