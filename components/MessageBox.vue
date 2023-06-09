<template>
    <div class="bg-black bg-opacity-25 w-full h-16 py-1">
        <div class="outline-none rounded-lg mx-5 px-5 h-10 mt-1 bg-slate-500 opacity-80 w-[95%] flex">
            <div class="mt-1">
                <i class="mdi mdi-plus-circle mr-4 text-2xl cursor-pointer"></i>
            </div>
            <textarea 
            class="bg-transparent text-white border-none outline-none pt-0 w-[90%] mt-2 resize-none" 
            type="text"
            v-model="message"
            @keydown="sendMessage"
            :placeholder="'Message #' + channelname "
            />
            
            <div class="mt-1">
                <i class="mdi mdi-file-gif-box ml-4 text-2xl cursor-pointer"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { emit } from 'process';
import { useContext } from 'unctx/index';

const { channelname, channel_id } = defineProps(['channelname', 'channel_id'])

var message = ref('')

const emit = defineEmits(['messageSend'])

const sendMessage = async (event: any) => {
    if (event.key === 'Enter' && message.value !== '' && event.shiftKey === false) {
        event.preventDefault()
        let to_send_message = message.value
        message.value = ''
        let { status } = await $fetch('/api/send', {
            method: 'POST',
            body: {
                message: to_send_message,
                channel_id: channel_id
            }
        })

        if (status === 200) {
            emit('messageSend', to_send_message)
        } else {
            alert('an error occured, the message probably wasnt sent ...')
        }
    }
}
</script>

<style scoped>

</style>