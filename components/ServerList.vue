<template>
    <div class="bg-slate-950 w-20 h-full text-center">
        <div class="servericon" @click="$router.push('/app')">
            <img class="rounded-full w-[70%]" src="https://cdn.discordapp.com/icons/1113941024302178416/f7371b2242a268657b388d7136718fc8.webp?size=240">
        </div>
        
        <hr class="border-slate-700 w-[80%] mx-auto text-center">
        
        <div class="servericon" @click="$router.push('/channel/123/1')">
            <img class="rounded-full w-[70%]" src="https://cdn.discordapp.com/icons/1095757728275759155/a_1ce85ac57b9723b563fcf6c0d4e3ce94.webp?size=240">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>