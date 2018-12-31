const all_projects = [
    {
        id: 1,
        name: "Awesome Project",
        counter: 3
    },
    {
        id: 2,
        name: "Project 2",
        counter: 0
    },
    {
        id: 3,
        name: "Electric Boogaloo",
        counter: 1
    }
]

const all_users = [
    {
        avatar: {
            url: "http://placekitten.com/130/130"
        },
        name: "Chairman Meow",
        status: "away"
    },
    {
        avatar: {
            url: "http://placekitten.com/230/230"
        },            
        name: "Katty Lee",
        status: "online"
    },
    {
        avatar: {
            url: "http://placekitten.com/270/270"
        },            
        name: "Stewart",
        status: "dnd"
    },
    {
        avatar: {
            url: "http://placekitten.com/411/411"
        },            
        name: "Tab E. Cat",
        status: "offline"
    }
]   

const messages = [    
    {
        id: 1,
        user: all_users[0],
        created_at: "23:00",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a urna non dolor gravida sagittis. Vestibulum eget porta ligula. Nulla lobortis a lacus nec fringilla. Cras ornare lacus ex, quis efficitur magna molestie eu. In hac habitasse platea dictumst. Donec egestas nibh a dolor ornare ornare. Nulla ut mi fermentum, dapibus nisi in, aliquam lectus.",
        attachments: [
            {
                type: "image",
                url: "http://placekitten.com/250/320"
            },
            {
                type: "image",
                url: "http://placekitten.com/250/320"
            }
        ]
    },
    {
        id: 2,
        user: all_users[1],
        created_at: "23:19",
        body: "Proin fermentum ultricies fermentum. Morbi at nunc fringilla, ullamcorper nulla quis, aliquam leo.",
        attachments: [
            {
                type: "image",
                url: "http://placekitten.com/640/480"
            }
        ]
    },
    {
        id: 3,
        user: all_users[2],
        created_at: "23:37",
        body: "meowmeowmeow :3"        
    }
]

export default {
    all_users: all_users,
    messages: messages,
    all_projects: all_projects
}
