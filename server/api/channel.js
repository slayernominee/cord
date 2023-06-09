import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v10'

const rest = new REST({ version: '10', makeRequest: fetch }).setToken(`${useRuntimeConfig().token}`)

export default defineEventHandler(async (event) => {
    const { server_id } = await readBody(event)

    const channels = await rest.get(Routes.guildChannels(server_id))
    
    return {
        channels: channels
    }
})