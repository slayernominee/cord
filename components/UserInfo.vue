<template>
    <div class="h-16 w-64 py-2 pl-4 bg-black bg-opacity-50 flex">
        <img class="rounded-full h-10 mr-3 mt-1" :src="`https://cdn.discordapp.com/avatars/${id}/${avatar}.webp?size=240`">
        <div>
            <p>{{ username }}</p>
            <span class="text-sm text-slate-400">{{ status }}</span>
        </div>

    </div>
</template>

<script setup lang="ts">
const { username, status, avatar, id } = defineProps(['username', 'status', 'avatar', 'id'])
</script>

<style scoped>

</style>