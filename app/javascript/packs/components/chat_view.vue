<template>
  <div class="chat-view">
    <div class="chat-messages">            
      <div class="message">
        <div class="gutter">
          <img class="avatar" src="http://placekitten.com/100/100" />
        </div>
        <div class="message--content">
          <header>
            <span class="name">Person Name</span>
            <span class="time">23:00</span>
          </header>              
          <div class="body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a urna non dolor gravida sagittis. Vestibulum eget porta ligula. Nulla lobortis a lacus nec fringilla. Cras ornare lacus ex, quis efficitur magna molestie eu. In hac habitasse platea dictumst. Donec egestas nibh a dolor ornare ornare. Nulla ut mi fermentum, dapibus nisi in, aliquam lectus.</p>

            <p>Phasellus volutpat tellus eu bibendum pharetra. Praesent <a href="http://thingerly.com/">euismod</a>, sapien nec convallis bibendum, nibh ex malesuada felis, sit amet interdum ex nisl ut libero. Vestibulum placerat tellus eget pretium pretium. Proin fermentum ultricies fermentum. Morbi at nunc fringilla, ullamcorper nulla quis, aliquam leo. Praesent sit amet porttitor dolor. Proin condimentum finibus risus ac posuere. Morbi faucibus laoreet porta. Etiam posuere hendrerit tristique.</p>

            <div class="attachment attachment--image"><img src="http://placekitten.com/250/320" /></div>
            <div class="attachment attachment--image"><img src="http://placekitten.com/250/320" /></div>
          </div>
        </div>
      </div>       

      <div class="message">
        <div class="gutter">
          <img class="avatar" src="http://placekitten.com/130/130" />
        </div>
        <div class="message--content">
          <header>
            <span class="name">Person Name</span>
            <span class="time">23:22</span>
          </header>              
          <div class="body">
            <p>Proin fermentum ultricies fermentum. Morbi at nunc fringilla, ullamcorper nulla quis, aliquam leo.</p>

            <div class="attachment attachment--image"><img src="http://placekitten.com/640/480" /></div>
          </div>
        </div>
      </div>

      <div class="message">
        <div class="gutter">
          <img class="avatar" src="http://placekitten.com/230/230" />
        </div>
        <div class="message--content">
          <header>
            <span class="name">Person Name</span>
            <span class="time">23:31</span>
          </header>              
          <div class="body">
            <p>meowmeowmeow :3.</p>
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

  </div> <!-- /chat-view -->
</template>

<script>
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