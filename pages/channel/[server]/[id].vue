<template>
    <div>
        <div class="flex w-full h-screen">
            
            <ServerList :guilds="guilds" />
            
            <!-- content -->
            <div class="w-full h-[100vh] flex">
                <div class="h-full overflow-hidden">
                    <ServerInfo name="My Server" />
                    <ChannelList :server_id="server_id" />
                    <UserInfo :username="user.username" status="sleepy" :avatar="user.avatar" :id="user.id" />
                    
                </div>
                
                <div class="w-full">
                    <div class="w-full bg-black bg-opacity-25 h-[92.2vh]">
                        <!-- search bar & co -->
                        <div class="w-full bg-transparent h-12">
                            
                        </div>
                        
                        <Messages v-if="channel_id !== 'undefined'" :messages="messages" :key="`${channel_id}-${message_key}`" :channel_id="channel_id" />
                    </div>
                    
                    <MessageBox channelname="info" :channel_id="channel_id" @messageSend="messageSend($event)" />
                </div>
                
            </div>
            
            <MemberList :members="members" /> 
            
            
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

// increase -> refresh
var message_key = ref(0)

const server_id = route.params.server;
const channel_id = route.params.id;

var user: any = await $fetch('/api/me')

var { guilds }: any = await $fetch('/api/server')

var { messages } :any = await $fetch('/api/messages', { method: 'POST', body: { channel_id: channel_id } })

const messageSend = async (message: string) => {
    messages.unshift({
        content: message,
        author: {
            username: user.username,
            avatar: user.avatar,
            id: user.id
        }
    })
    message_key.value++
}

const members = [
{
    "name": "Admin",
    "members": [
    {
        "name": "raphiel",
        "avatar": "https://cdn.discordapp.com/icons/1113941024302178416/f7371b2242a268657b388d7136718fc8.webp?size=240",
        "owner": true
    },
    {
        "name": "slayernominee",
        "avatar": "https://picsum.photos/240",
        "owner": false
    }
    ]
},
{
    "name": "Online",
    "members": [
    {
        "name": "mee5",
        "avatar": "29271f9348f821ad2edd0a582523174b",
        "id": "1115345432479019100",
        "owner": false
    },
    {
        "name": "another user",
        "avatar": "https://cdn.discordapp.com/icons/1113941024302178416/f7371b2242a268657b388d7136718fc8.webp?size=240",
        "owner": false
    },
    {
        "name": "another user",
        "avatar": "https://cdn.discordapp.com/icons/1113941024302178416/f7371b2242a268657b388d7136718fc8.webp?size=240",
        "owner": false
    }
    ]
}
]

</script>

<style scoped>

</style>