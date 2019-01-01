<template>
  <div class="chat-view">
    <div class="chat-messages" ref="messages">            
      <chat-message v-for="(message, index) in messages" :key="index" :message="message" />    
    </div> <!-- /chat-messages -->

    <div class="chat-view--input-region">
      <chat-input />
    </div>

  </div> <!-- / chat-view -->
</template>

<script>
    import ChatMessage from './chat_message.vue'
    import ChatInput from './chat_input.vue'
    import Mock from 'mock'

    export default {
        name: 'chat-view',

        components: {
          'chat-message': ChatMessage,
          'chat-input': ChatInput
        },

        props: {
          "messages": {
            required: false,
            type: Array
          }
        },

        methods: {
            sendMessage(message) {
              Morning.Chat.sendMessage(message)
            },
        },

        mounted() {
            App.chat_messages = App.cable.subscriptions.create("ChatMessagesChannel", {
                connected: () => {},
                disconnected: () => {},
                received: (data) => {                                
                }
            })
        },

        updated() {
          console.log("er wah mo ga li na")
          this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
        }
    }
</script>

<style lang="scss">
  $padding: 0.5em;

  .chat-view {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0.5em;

    .chat-messages {
      overflow: auto; 
    }
  }
</style>  