<template>
    <div class="flex w-full h-screen">
        
        <!-- server list -->
        <ServerList />
        
        <!-- content -->
        <div class="w-full h-[100vh]">
            <div class="h-full overflow-hidden">
                <ServerInfo name="???" />
                <ChannelList />
                <UserInfo username="raphiel" status="sleepy" />
                
            </div>
            
            <!-- messages -->
            <div>
                
            </div>
            
            <!-- send message -->
            <div>
                
            </div>
        </div>
        
        <!-- member liat -->
        <MemberList /> 
    </div>
    
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>