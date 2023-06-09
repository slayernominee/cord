import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v10'

const rest = new REST({ version: '10', makeRequest: fetch }).setToken(`${useRuntimeConfig().token}`)

export default defineEventHandler(async (event) => {
    const { channel_id } = await readBody(event)
    const messages = await rest.get(Routes.channelMessages(channel_id))

    return {
        messages: messages
    }
})