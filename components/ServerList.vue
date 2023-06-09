<template>
    <div class="bg-slate-950 w-20 h-full text-center">
        <div class="servericon" @click="$router.push('/channel/@me')">
            <img class="rounded-full w-[70%]" src="https://cdn.discordapp.com/icons/1113941024302178416/f7371b2242a268657b388d7136718fc8.webp?size=240">
        </div>
        
        <hr class="border-slate-700 w-[80%] mx-auto text-center">
        
        <div v-for="guild in guilds" class="servericon" @click="$router.push(`/channel/${guild.id}/${guild.first_channel}`)">
            <img class="rounded-full w-[70%]" :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=240`">
        </div>
    </div>
</template>

<script setup lang="ts">
const { guilds } = defineProps(['guilds'])
</script>

<style scoped>

</style>