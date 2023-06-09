<template>
    <div class="bg-transparent w-full h-16">
        <div class="outline-none rounded-lg mx-5 px-5 h-10 mt-1 bg-slate-500 w-[95%] flex">
            <div class="mt-1">
                <i class="mdi mdi-plus-circle mr-4 text-2xl cursor-pointer"></i>
            </div>
            <input 
            class="bg-transparent text-white border-none outline-none pt-0 w-[90%]" 
            type="text"
            :placeholder="'Message #' + channelname "
            >
            
            <div class="mt-1">
                <i class="mdi mdi-file-gif-box ml-4 text-2xl cursor-pointer"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { channelname } = defineProps(['channelname'])
</script>

<style scoped>

</style>