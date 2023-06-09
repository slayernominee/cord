import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v10'

const rest = new REST({ version: '10' }).setToken(`${useRuntimeConfig().token}`)

export default defineEventHandler(async (event) => {
    const { guild_id, user_id } = await readBody(event)
    const member = await rest.get(Routes.guildMember(guild_id, user_id))

    return {
        member: member
    }
})