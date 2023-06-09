<template>
    <div class="h-16 w-64 py-2 pl-4 absolute bottom-0 bg-slate-800 flex">
        <img class="rounded-full h-10 mr-3 mt-1" src="https://cdn.discordapp.com/icons/1113941024302178416/f7371b2242a268657b388d7136718fc8.webp?size=240">
        <div>
            <p>{{ username }}</p>
            <span class="text-sm text-slate-400">{{ status }}</span>
        </div>

    </div>
</template>

<script setup lang="ts">
const { username, status } = defineProps(['username', 'status'])
</script>

<style scoped>

</style>