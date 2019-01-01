<template lang="html">
    <div class="chat-message-input">
        <textarea v-on:keypress.enter.prevent="sendMessage" @focus="editorFocused" ref="input" class="chat-message-input__editor"></textarea>

        <div class="chat-message-input__emoji">
          <emoji-picker @emoji:picked="handleEmojiPicked"
                          :data="data" />
        </div>
    </div>
</template>

<script>
    import data from "@zaichaopan/emoji-picker/data/emojis.json"

    export default {        
        name: 'chat-input',
        data() {
          return {
            data: data,
          }
        },
        methods: {
            sendMessage() {
                let text = this.$refs.input.value

                this.$refs.input.value = ''

                this.$parent.sendMessage(text)
            }, 

            editorFocused() {
              let input = this.$refs.input

              console.log(input.selectionStart)
            },

            handleEmojiPicked(emoji) {
              this.$refs.input.value += emoji              
              this.$refs.input.focus()
            },          
        },
    }
</script>

<style lang="scss" >
.chat-message-input {
  $padding: 0.5em;  
  $border: solid 2px #eee;

  padding: $padding;
  display: flex;
  flex-direction: row;

  &__editor {
    font-size: 1em;
    padding: $padding;
    border: $border;
    border-right: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  &__emoji {
    border: $border;
    border-left: none;
  }
}
</style>