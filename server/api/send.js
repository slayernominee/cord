import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v10'

const rest = new REST({ version: '10', makeRequest: fetch }).setToken(`${useRuntimeConfig().token}`)

export default defineEventHandler(async (event) => {
    const { message, channel_id } = await readBody(event)

    try {
        await rest.post(Routes.channelMessages(channel_id), {
            body: {
                content: message,
            }
        })

        return {
            status: 200
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500
        }
    }
})