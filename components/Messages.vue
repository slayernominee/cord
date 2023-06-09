<template>
    <div class="px-10 pt-4 overflow-y-scroll h-[85vh]" style="display: flex;
  flex-direction: column-reverse;" id="messageList">
        <div v-for="message in messages" class="message">
            <div class="flex">
                <img class="messageAvatar" :src="`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp?size=240`">
                <div class="flex">
                    <p class="mr-4 text-blue-500">{{ message.author.username }}</p>
                    <span class="text-xs pt-1 text-slate-500 text-opacity-80">Today at 3:23 PM</span>
                </div>
            </div>
            <p class="ml-14 text-sm text-slate-200 -mt-4 whitespace-pre-line">
                {{ message.content }}
            </p>
        </div>
    </div>

</template>

<script setup lang="ts">
const { messages, channel_id } = defineProps(['messages', 'channel_id'])
//const { messages } :any = await $fetch('/api/messages', { method: 'POST', body: { channel_id: channel_id } })
</script>

<style scoped>

</style>