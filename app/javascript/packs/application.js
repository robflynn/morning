/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Mock from '../mock'

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router'

import App from '../app.vue'
import ProjectView from '../packs/components/project_view'

console.log(Mock)

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

window.Morning || (window.Morning = {})

window.Morning.setupActionCable = () => {
    App.cable = ActionCable.createConsumer("/cable");
}

window.Morning.getUsers = () => {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(Mock.all_users);                
        }, 200)
    });

    return promise;
}

window.Morning.getMessages = () => {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(Mock.messages);                
        }, 200)
    });

    return promise;
}

window.Morning.getProjects = () => {
    console.log("THERE???")
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("HERE?")
            console.log(Mock.all_projects)
            console.log(resolve)
            resolve(Mock.all_projects);                
        }, 200)
    });

    return promise;
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

window.Morning.Chat = {
    sendMessage: (text) => {
        var data = {
            message: text,
            foo: 'bar'
        }

        return fetch("/api/chat_messages", {
            method: 'post',                        
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': Rails.csrfToken(),                
            },
            body: JSON.stringify(data)
        })
    }
}