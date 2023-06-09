<template>
    <div class="bg-black bg-opacity-40 w-full h-16 py-1">
        <div class="outline-none rounded-lg mx-5 px-5 h-10 mt-1 bg-slate-500 opacity-80 w-[95%] flex">
            <div class="mt-1">
                <i class="mdi mdi-plus-circle mr-4 text-2xl cursor-pointer"></i>
            </div>
            <input 
            class="bg-transparent text-white border-none outline-none pt-0 w-[90%]" 
            type="text"
            v-model="message"
            @keypress="sendMessage"
            :placeholder="'Message #' + channelname "
            >
            
            <div class="mt-1">
                <i class="mdi mdi-file-gif-box ml-4 text-2xl cursor-pointer"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { channelname, channel_id } = defineProps(['channelname', 'channel_id'])

var message = ref('')

const sendMessage = async (event: any) => {
    if (event.key === 'Enter') {
        let { status } = await $fetch('/api/send', {
            method: 'POST',
            body: {
                message: message.value,
                channel_id: channel_id
            }
        })

        if (status === 200) {
            message.value = ''
        } else {
            alert('an error occured, the message probably wasnt sent ...')
        }
    }
}
</script>

<style scoped>

</style>