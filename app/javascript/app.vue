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
              <ul>
                <li>User A</li>
                <li>User B</li>
                <li>User C</li>
                <li>User D</li>
                <li>User E</li>
              </ul>
            </div>
          </section>
        </div>
      </aside>

      <main class="doze-app--main morning--main">

        <div class="doze-split-view">

          <div class="chat-messages">
            <div class="message">
              <div class="avatar"></div>
              <span class="name">Person Name</span>
              <span class="time">@ 23:00</span>
              <div class="body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a urna non dolor gravida sagittis. Vestibulum eget porta ligula. Nulla lobortis a lacus nec fringilla. Cras ornare lacus ex, quis efficitur magna molestie eu. In hac habitasse platea dictumst. Donec egestas nibh a dolor ornare ornare. Nulla ut mi fermentum, dapibus nisi in, aliquam lectus.</p>

                <p>Phasellus volutpat tellus eu bibendum pharetra. Praesent <a href="http://thingerly.com/">euismod</a>, sapien nec convallis bibendum, nibh ex malesuada felis, sit amet interdum ex nisl ut libero. Vestibulum placerat tellus eget pretium pretium. Proin fermentum ultricies fermentum. Morbi at nunc fringilla, ullamcorper nulla quis, aliquam leo. Praesent sit amet porttitor dolor. Proin condimentum finibus risus ac posuere. Morbi faucibus laoreet porta. Etiam posuere hendrerit tristique.</p>

                <span class="attachment attachment--image"><img src="http://placekitten.com/450/320" /></span>
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
  .doze-app {
    background: green;
    display: flex;
    flex: 1;
  }

  .doze-app--sidebar {
    background: blue;
    min-width: 200px;
  }

  .doze-split-view {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
</style>


