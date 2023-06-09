import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

const rest = new REST({ version: '10', makeRequest: fetch }).setToken(`${useRuntimeConfig().token}`);

export default defineEventHandler(async (event) => {
    let userdata = await rest.get(Routes.user('@me'))  

    return userdata
})