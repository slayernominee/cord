import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v10'

const rest = new REST({ version: '10' }).setToken(`${useRuntimeConfig().token}`)

export default defineEventHandler(async (event) => {
    const { guild_id } = await readBody(event)
    const members = await rest.get(Routes.guildMembers(guild_id), { query: "limit=30"})

    return {
        members: members
    }
    
})