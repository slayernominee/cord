<template>
    <div class="px-10 pt-4">
        <div v-for="message in messages" class="message">
            <div class="flex">
                <img class="messageAvatar" :src="message.user.avatar">
                <div class="flex">
                    <p class="mr-4 text-blue-500">{{ message.user.username }}</p>
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
const messages = [
{
    user: {
        username: 'raphiel',
        avatar: 'https://cdn.discordapp.com/avatars/800360309444313088/725589f83342b30e417b80404e6b4755.webp?size=160',
    },
    content: `Hey, how are you?
    Nostrud do do ea amet ea ad amet anim minim consectetur esse voluptate magna. Mollit aliquip aliqua in mollit ea est in nisi pariatur pariatur cupidatat cupidatat minim cupidatat. Aliquip labore aliquip voluptate fugiat elit. Amet laboris Lorem ea amet.
    `,
},
{
    user: {
        username: 'slayernominee',
        avatar: 'https://picsum.photos/240',
    },
    content: "im fine :)"
}
]
</script>

<style scoped>

</style>