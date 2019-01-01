<template>
  <div class="chat-view">
    <div class="chat-messages" ref="messages">            
      <ChatMessage v-for="(message, index) in messages" :key="index" :message="message" />    
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
          'ChatMessage': ChatMessage,
          'ChatInput': ChatInput
        },

        data() {
            return {
                messages: []
            }
        },

        methods: {
            sendMessage(message) {
              Morning.Chat.sendMessage(message)
            },

            getMessages() {
                Morning.getMessages()                                        
                   .then((messages) => {
                        this.messages = messages
                    })
            }
        },

        mounted() {
            App.chat_messages = App.cable.subscriptions.create("ChatMessagesChannel", {
                connected: () => {},
                disconnected: () => {},
                received: (data) => {
                  console.log(data)
                  switch(data.type) {
                      case "MESSAGE_CREATED": 
                        let message = {
                          id: Math.round(Math.random() * 10000000),
                          user: Mock.all_users[3],
                          created_at: "xx:xx",
                          body: data.text
                        }

                        this.messages.push(message)

                        break;                
                  }
                }
            })

            this.getMessages()            
        },

        updated() {
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