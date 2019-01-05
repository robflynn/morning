<template>
<div class="chat-message">
    <div class="gutter">
        <img class="avatar" src="http://placekitten.com/g/200/200" />
    </div>
    <div class="chat-message__wrapper">
        <header>
            <span class="name">{{ message.user.email }}</span>
            <span class="time">{{ message.created_at }}</span>

            <ul class="controls">
              <li>
                <a v-on:click.prevent="editClicked" href="#">Edit</a>
              </li>

              <li>
                <a v-on:click.prevent="removeClicked" href="#">Delete</a>
              </li>
            </ul>
        </header>
        <div>
            {{ message.text }}

            <div class="attachments">
                <div v-for="attachment in message.attachments" v-bind:class="attachment.type" class="attachment">
                    <img :src="attachment.url" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props: {
          message: {
            required: true,
            type: Object
          }
        },
        methods: {
          editClicked(e) {
            console.log("Edit clicked for conversation")
          },

          removeClicked(e) {
            console.log("Remove clicked for conversation")
          },
        }
    }
</script>

<style lang="scss">
.chat-message {
    $gutterWidth: 3.5em;
    $padding: 0.5em;

    display: flex;
    flex-direction: row;

    &:hover {
      .controls {
        opacity: 1;
      }
    }

    & + & {
      margin-top: $padding * 4;
    }

    .gutter {      
      width: $gutterWidth;
      padding: 0 $padding 0 0;
    }

    .avatar {
      width: $gutterWidth - (2 * $padding);
      height: $gutterWidth - (2 * $padding);
      border-radius: 5px;
    }

    &__wrapper {
      width: 100%;

      header {
        font-family: sans-serif;
        margin-bottom: 0.75em;
        width: 100%;

        .name {
          font-weight: bold;
          margin-right: 1em;
        }

        .time {
          color: #ccc;
          font-size: 0.8em;
          font-family: sans-serif;;
        }

        .controls {
          opacity: 0;
          float: right;
          transition: 0.25s opacity;          

          display: flex;
          flex-direction: row;

          li {
            margin-left: 10px;
          }

          font-size: 0.8em;

          a {
            text-decoration: none;
            color: #000;
          }
        }
      }

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
        margin-right: $padding;

        &:last-child {
            margin-right: 0;
        }  
      }
    }
}

</style>