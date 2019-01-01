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

    export default {
        name: 'chat-view',

        components: {
          'chat-message': ChatMessage,
          'chat-input': ChatInput
        },

        data() {
          return {
            messages: []
          }
        },

        props: {
          "project": {
            required: true,
            type: Object
          }
        },

        methods: {
            sendMessage(message) {
              Morning.sendMessage(this.project, message)
            },
        },

        mounted() {
            App.chat_messages = App.cable.subscriptions.create("ChatMessagesChannel", {
                connected: () => {},
                disconnected: () => {},
                received: (data) => {
                  this.messages.push(data.message)
                }
            })
        },

        updated() {
          console.log("er wah mo ga li na")
          console.log(this.$refs.messages)
          this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
        }
    }
</script>

<style lang="scss">
  $padding: 0.5em;

  .chat-view {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    width: 100%;
    height: 100vh;

    .chat-messages {
      overflow: auto; 
    }
  }
</style>  