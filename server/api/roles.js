import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v10'

const rest = new REST({ version: '10' }).setToken(`${useRuntimeConfig().token}`)

function sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

export default defineEventHandler(async (event) => {
    const { guild_id } = await readBody(event)

    const roles = sortByKey(await rest.get(Routes.guildRoles(guild_id), { query: "limit=50"}), 'position')

    return {
        roles: roles
    }
})