<template>
  <div class="morning doze-app">
    <SplitView>
      <aside class="doze-app--sidebar morning--sidebar">
        <div class="doze-accordion">
          <section>
            <h2>Projects</h2>

            <div>
              <projects-list />
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
              <users-list />
            </div>
          </section>
        </div>
      </aside>

      <main class="doze-app--main morning--main">

        <SplitView>

          <ChatView />

          <aside class="doze-app--sidebar project--sidebar">
            Another Sidebar
          </aside>

        </SplitView>
      </main>
    </SplitView>
  </div>
</template>

<script>
  import SplitView from './packs/components/split_view.vue';
  import ChatView from './packs/components/chat_view.vue';
  import UsersList from './packs/components/users_list.vue';
  import ProjectsList from './packs/components/projects_list.vue';

  export default {
    components: 
      { 
        "SplitView": SplitView,
        "users-list": UsersList,
        "projects-list": ProjectsList,
        "ChatView": ChatView,
      }
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

<style lang="scss">
  $sidebarColor: #2B3940;
  $padding: 0.5em;  

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
    width: 100%;
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
          color: #ccc;

          ul {
            li {
              padding: $padding;

            }
          }
        }
      }

      & + section {
        margin-top: 1em;
      }
    }

  }
</style>


