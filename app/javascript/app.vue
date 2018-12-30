<template>
  <div class="morning doze-app">
    <div class="doze-split-view">
      <aside class="doze-app--sidebar morning--sidebar">
        <div class="doze-accordion">
          <section>
            <h2>Projects</h2>
            <div>
              <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Messages</h2>
            <div>
              <ul>
                <li>Trent</li>
                <li>Elton</li>
                <li>David</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Users</h2>
            <div>              
              <ul class="users-list">
                <li class="online">User A</li>
                <li class="online">User B</li>
                <li class="offline">User C</li>
                <li class="offline">User D</li>
                <li class="offline">User E</li>
              </ul>
            </div>
          </section>
        </div>
      </aside>

      <main class="doze-app--main morning--main">

        <div class="doze-split-view">

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
          </div>

          <aside class="doze-app--sidebar project--sidebar">
            Another Sidebar
          </aside>

        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lange="scss">  
  .col {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>

<style lang="scss" scoped>
  $sidebarColor: #2B3940;
  $padding: 0.5em;  

  .message {
    $gutterWidth: 3.5em;

    display: flex;
    flex-direction: row;

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
        border: solid 1px darken(#eee, 25%);
        padding: $padding * 2;
        cursor: pointer;
      }
    }

  }

  .doze-app {
    background: #fff;
    display: flex;
    flex: 1;
  }

  .doze-app--sidebar {
    min-width: 200px;
  }

  .doze-app--main {
    padding: $padding;
  }

  .doze-split-view {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .morning--sidebar {
    background: $sidebarColor;    
  }

  .doze-accordion {
    section {
      h1,h2,h3,h4,h5 {
        background: lighten($sidebarColor, 50%);
        padding: $padding;        

        + div {
          padding: $padding;
          color: #ccc;

          ul {
            li {
              padding: $padding;
            }
          }
        }
      }

      & + & {
        margin-top: 1em;
      }
    }

  }
</style>


