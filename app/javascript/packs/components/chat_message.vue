<template>
<div class="chat-message">
    <div class="gutter">
        <img class="avatar" :src="message.user.avatar.url" />
    </div>
    <div class="chat-message__wrapper">
        <header>
            <span class="name">{{ message.user.name }}</span>
            <span class="time">{{ message.created_at }}</span>
        </header>
        <div>
            {{ message.body }}
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
        }
    }
</script>

<style lang="scss">
.chat-message {
    $gutterWidth: 3.5em;
    $padding: 0.5em;

    display: flex;
    flex-direction: row;

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

    &__wrapper {
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