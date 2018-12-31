<template>
  <div class="chat-view">
    <div class="chat-messages">            
      <ChatMessage v-for="(message, index) in messages" :key="index" :message="message" />    
    </div> <!-- /chat-messages -->


      <div class="chat-view--input-region">
        <div class="chat-message-input">
          <div class="chat-message-input--editor" contenteditable="true">
          </div>
        </div>
      </div>

    </div> <!-- / chat-view -->
</template>

<script>
    import ChatMessage from './chat_message.vue'

    export default {
        components: {
          'ChatMessage': ChatMessage
        },

        data() {
            return {
                messages: []
            }
        },

        methods: {
            getMessages() {
                Morning.getMessages()                                        
                   .then((messages) => {
                        this.messages = messages
                    })
            }
        },

        mounted() {
            this.getMessages()
        },


        updated() {
            console.log("it was updated")
        }
    }
</script>

<style lang="scss">
  $padding: 0.5em;

  .chat-view {
    display: flex;
    flex-direction: column;

    .chat-messages {
      overflow: auto; 
    }

    &--input-region {
    }

    .chat-message-input {
      padding: $padding;

      &--editor {
        line-height: 1em;
        min-height: 1em + ( 2 * $padding);
        padding: $padding;
        border: solid 2px #eee;        

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>  