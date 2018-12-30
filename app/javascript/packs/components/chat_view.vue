<template>
  <div class="chat-view">
    <div class="chat-messages">            

        <div v-for="(message, index) in messages" :key="index" class="message">
          <div class="gutter">
            <img class="avatar" src="http://placekitten.com/100/100" />
          </div>
          <div class="message--content">
            <header>
              <span class="name">{{ message.user.name }}</span>
              <span class="time">{{ message.created_at }}</span>
            </header>              
            <div class="body">
              {{ message.body }}

              <div class="attachments">
                <div v-for="attachment in message.attachments" v-bind:class="attachment.type" class="attachment">
                  <img :src="attachment.url" />
                </div>
              </div>
            </div>
          </div>

        </div>
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
    export default {

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

<style lang="scss" scoped>
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


  .message {
    $gutterWidth: 3.5em;

    display: flex;
    flex-direction: row;

    & + .message {
      margin-top: $padding * 4;
    }


    .gutter {      
      width: $gutterWidth;
      padding: 0 $padding 0 0;
    }

    .avatar {
      width: $gutterWidth - (2 * $padding);
      height: $gutterWidth - (2 * $padding);
      background: purple;
      border-radius: 5px;
    }

    header {
      font-family: sans-serif;
      margin-bottom: 0.75em;

      .name {
        font-weight: bold;
        margin-right: 1em;
      }

      .time {
        color: #ccc;
        font-size: 0.8em;
        font-family: sans-serif;;
      }
    }

    &--content {
      p {
        margin-bottom: 1em;
        line-height: 1.4em;
      }

      .attachments {
        display: block;
        margin-top: 1em;
      }

      .attachment {
        display: inline-block;
        background: #eee;
        border: solid 1px darken(#eee, 15%);
        padding: 2 * $padding;
        cursor: pointer;        

        & + .attachment {
          margin-left: $padding;
        }
      }
    }

  }

</style>  