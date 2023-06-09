<template>
    <div class="bg-black bg-opacity-50 text-slate-300 text-opacity-70 w-64 h-full overflow-scroll pt-4">
        
        <div class="memberListRole" v-for="role in members">
            <div class="memberListRoleName" v-if="role.members.length !== 0">
                {{ role.name }} - {{ role.members.length }}
            </div>

            <div class="memberListMember" v-for="member in role.members">
                <img class="memberListMemberAvatar" :src="`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.webp?size=160`">
                <p>{{ member.user.username }}</p>
                <i v-if="member.owner" class="mdi mdi-crown text-yellow-400 ml-2"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const { members } = defineProps(['members'])

</script>

<style scoped>

</style>