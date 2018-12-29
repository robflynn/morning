<template>
    <div class="project-view">
        <div class="col">
            <div class="chat-history-region">
                this is teh chat history
            </div>
            <div class="chat-input-region">
                this is where text input happens
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["id"]
    }
</script>   

<style lang="scss" scoped>
    .project-view {
        background: purple;
        width: 100%;
        height: 100%;
    }
</style>