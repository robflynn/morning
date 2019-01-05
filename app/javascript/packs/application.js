/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Morning from './morning'

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import Router from 'vue-router'

import Pill from '../packs/components/pill.vue'  
import PillCell from '../packs/components/pill_cell.vue'  
import CollapsableSection from '../packs/components/collapsable_section.vue'  
import Sidebar from '../packs/components/sidebar.vue'  
import SplitView from '../packs/components/split_view.vue'

import App from '../app.vue'
import ProjectView from '../packs/components/project_view'
import EmojiPicker from '@zaichaopan/emoji-picker';

// import our state manager
import { store } from './store'

// Register our global components
Vue.component('pill', Pill)
Vue.component('pill-cell', PillCell)
Vue.component('collapsable-section', CollapsableSection)
Vue.component('sidebar', Sidebar)
Vue.component('split-view', SplitView)

Vue.use(Vuex)

Vue.use(EmojiPicker)

// Let's hack it for now
window.Morning = Morning


Vue.use(Router)
const router = new Router({
    routes: [
        { 
            path: '/projects/:id', 
            component: ProjectView, 
            name: 'project',
            props: true
        }
    ]
})


document.addEventListener("turbolinks:load", function() {
    var element = document.querySelector("#morning--app")

    if (element != undefined) {

        const app = new Vue({
            el: element,
            render: h => h(App),
            router,
            store
        })
    }
});