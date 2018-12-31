<template>
  <div class="morning doze-app">
    <SplitView>
      <sidebar>
        <collapsable-section name="Projects">
          <projects-list />
        </collapsable-section>

        <collapsable-section name="Messages">
          <ul>  
            <li>              
              <pill-cell>Trent</pill-cell>
            </li>                
            <li>
              <pill-cell :count="5">Elton</pill-cell>
            </li>
            <li>
              <pill-cell>David</pill-cell>
            </li>
          </ul>
        </collapsable-section>

        <collapsable-section name="Users">
          <users-list />
        </collapsable-section>
      </sidebar>

      <main class="doze-app--main morning--main">

        <SplitView>
          <ChatView />

          <sidebar>
            <collapsable-section name="Credentials" collapsed=true />
            <collapsable-section name="Tasks" collapsed=true />
            <collapsable-section name="Members" collapsed=true />
            <collapsable-section name="Assets" collapsed=true />
          </sidebar>

        </SplitView>

      </main>
    </SplitView>
  </div>
</template>

<script>
  import SplitView from './packs/components/split_view.vue'
  import ChatView from './packs/components/chat_view.vue'
  import UsersList from './packs/components/users_list.vue'
  import ProjectsList from './packs/components/projects_list.vue'
  import CollapsableSection from './packs/components/collapsable_section.vue'    

  import Sidebar from './packs/components/sidebar.vue'  

  export default {
    components: 
      { 
        "SplitView": SplitView,
        "users-list": UsersList,
        "projects-list": ProjectsList,
        "ChatView": ChatView,
        "collapsable-section": CollapsableSection,
        "sidebar": Sidebar
      },

      mounted() {        
        Morning.setupActionCable()
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
  $padding: 0.5em;  
  $sidebarColor: #2B3940;

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

</style>


