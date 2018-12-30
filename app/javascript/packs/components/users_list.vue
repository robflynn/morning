<template>
    <ul class="users-list">
        <li v-for="user in users">
            <span v-bind:class="user.status" class="user">{{ user.name }}</span>
        </li>
    </ul>
</template>

<script>
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

    export default {
        data() {
            return {
                users: all_users
            }
        }
    }
</script>

<style lang="scss" scoped>
    .users-list {
        $indicatorSize: 10px;    

        li {
            padding: 10px;
            cursor: pointer;

            &:hover {
                background: rgba(255, 255, 255, 0.1);
            }
        }

        .user {
            &:before {
                content: "•";
                margin-right: 10px;
            }

            &.online:before {
                color: #0f0;
            }

            &.away:before {
                color: #ff0;
            }

            &.dnd:before {
                color: #f00;
            }

            &.offline:before {
                color: #eee;
            }
        }

    }
</style>