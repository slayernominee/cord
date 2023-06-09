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

                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const server_id = route.params.server;
const channel_id = route.params.id;

var user: any = await $fetch('/api/me')

var { guilds }: any = await $fetch('/api/server')

</script>

<style scoped>

</style>