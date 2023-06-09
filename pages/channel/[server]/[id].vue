<template>
    <div>
        <div class="flex w-full h-screen">
            
            <!-- server list -->
            <ServerList />
            
            <!-- content -->
            <div class="w-full h-[100vh] flex">
                <div class="h-full overflow-hidden">
                    <ServerInfo name="My Server" />
                    <ChannelList />
                    <UserInfo username="raphiel" status="sleepy" />
                    
                </div>
                
                <div class="w-full">
                    <!-- search bar & co -->

                    
                    <div class="w-full bg-black bg-opacity-25 h-[92.2vh]">
                        <!-- search bar & co -->
                        <!-- messages -->
                    </div>
                    
                    <!-- send message -->
                    <MessageBox channelname="info" />
                </div>
                
            </div>
            
            <!-- member liat -->
            <MemberList /> 
            
            
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>