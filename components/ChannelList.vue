<template>
    <div class="bg-black bg-opacity-50 text-slate-300 text-opacity-70 w-64 h-[86.5vh] overflow-scroll">
        <NuxtLink v-for="channel in channels" :to="`/channel/${channel.guild_id}/${channel.id}`">
            <div class="channel">
                # {{ channel.name }}
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const { server_id } = defineProps(['server_id'])
const { channels } :any = await $fetch('/api/channel', {
    method: 'POST',
    body: {
        server_id: server_id
    }
})
</script>
