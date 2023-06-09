<template>
    <div class="bg-black bg-opacity-50 text-slate-300 text-opacity-70 w-64 h-full overflow-scroll pt-4">
        
        <div class="memberListRole" v-for="role in members">
            <div class="memberListRoleName">
                {{ role.name }} - {{ role.members.length }}
            </div>

            <div class="memberListMember" v-for="member in role.members">
                <img class="memberListMemberAvatar" :src="member.avatar">
                <p>{{ member.name }}</p>
                <i v-if="member.owner" class="mdi mdi-crown text-yellow-400 ml-2"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const members = [
{
    "name": "Admin",
    "members": [
    {
        "name": "raphiel",
        "avatar": "https://cdn.discordapp.com/icons/1113941024302178416/f7371b2242a268657b388d7136718fc8.webp?size=240",
        "owner": true
    },
    {
        "name": "slayernominee",
        "avatar": "https://picsum.photos/240",
        "owner": false
    }
    ]
},
{
    "name": "Online",
    "members": [
    {
        "name": "mee5",
        "avatar": "https://cdn.discordapp.com/avatars/1115345432479019100/29271f9348f821ad2edd0a582523174b.webp?size=160",
        "owner": false
    },
    {
        "name": "another user",
        "avatar": "https://cdn.discordapp.com/icons/1113941024302178416/f7371b2242a268657b388d7136718fc8.webp?size=240",
        "owner": false
    },
    {
        "name": "another user",
        "avatar": "https://cdn.discordapp.com/icons/1113941024302178416/f7371b2242a268657b388d7136718fc8.webp?size=240",
        "owner": false
    }
    ]
}
]

</script>

<style scoped>

</style>