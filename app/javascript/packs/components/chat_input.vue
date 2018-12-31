<template lang="html">
    <div class="chat-message-input">
        <div v-on:keypress.enter.prevent="sendMessage" ref="input" class="chat-message-input__editor" contenteditable="true"></div>
    </div>
</template>

<script>
    export default {        
        name: 'chat-input',
        methods: {
            sendMessage() {
                let text = this.$refs.input.innerText

                this.$refs.input.innerText = ''

                this.$parent.sendMessage(text)
            },            
        },
    }
</script>

<style lang="scss" >
.chat-message-input {
  $padding: 0.5em;
  padding: $padding;

  &__editor {
    line-height: 1em;
    min-height: 1em + (2 * $padding);
    padding: $padding;
    border: solid 2px #eee;        

    &:focus {
      outline: none;
    }
  }
}
</style>