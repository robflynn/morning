import Mock from '../mock'

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
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(Mock.all_projects);                
        }, 200)
    });

    return promise;
}

window.Morning.Chat = {
    sendMessage: (text) => {
        var data = {
            message: text
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