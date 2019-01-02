import Mock from '../mock'

class Morning {
    static setupActionCable = () => {
        window.App.cable = ActionCable.createConsumer("/cable");
    }

    static createCredential(project, key, value) {
        let data = {
            credential: {
                key: key,
                value: value
            }
        }

        return fetch(`/api/projects/${project.id}/credentials`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': Rails.csrfToken(),                
            },
            body: JSON.stringify(data)            
        })
    }

    static getCredentials(project) {
        return fetch(`/api/projects/${project.id}/credentials`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': Rails.csrfToken(),                
            },            
        }).then(response => response.json())
    }

    static getProjects() {
        return fetch(`/api/projects/`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': Rails.csrfToken(),                
            },        
        }).then(response => response.json())        
    }

    static createProject(name) {
        let data = {
            project: {
                name: name
            }
        }

        return fetch('/api/projects/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': Rails.csrfToken(),                
            },
            body: JSON.stringify(data)
        })
    }

    static getUsers() {
        return Morning.mock(Mock.all_users)
    }

    static getMessages(project) {
        return fetch(`/api/projects/${project.id}/chat_messages`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': Rails.csrfToken(),                
            },        
        }).then(response => response.json())                
    }

    static sendMessage(project, text) {
        var data = {
            chat_message: {
                text: text
            }
        }

      return fetch(`/api/projects/${project.id}/chat_messages`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': Rails.csrfToken(),                
            },
            body: JSON.stringify(data)
        })

    }

    static mock(response, delay = 200) {
        var promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(response);                
            }, delay)
        });

        return promise;                
    }    
}


/*
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
    return fetch(`/api/projects/`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': Rails.csrfToken(),                
        },        
    }).then(response => response.json())
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
*/

export default Morning
