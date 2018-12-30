/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router'
import App from '../app.vue'
import ProjectView from '../packs/components/project_view'

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

const all_users = [
    {
        name: "David",
        status: "away"
    },
    {
        name: "Trent",
        status: "online"
    },
    {
        name: "Jacob",
        status: "dnd"
    },
    {
        name: "Billy",
        status: "offline"
    }
];

window.Morning = {
    getUsers: () => {        
        console.log("inside the method to get users")
        var promise = new Promise(function(resolve, reject) {

            setTimeout(function() {
                console.log("resolving now")
                resolve(all_users);                
            }, 200)
        });

        return promise;
    }
}

document.addEventListener("turbolinks:load", function() {
    var element = document.querySelector("#morning--app")

    if (element != undefined) {

        const app = new Vue({
            el: element,
            render: h => h(App),
            router
        })
    }
});
