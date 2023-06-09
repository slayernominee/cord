export default defineEventHandler(async (event) => {
    const { guild_id } = await readBody(event)
    const { roles } = await $fetch('/api/roles', { method: 'POST', body: { guild_id: guild_id } })


    const { members } = await $fetch('/api/members', { method: 'POST', body: { guild_id: guild_id } })

    // TODO: option to give the roles and the users -> less requests 


    var memberbyroles = []

    for (let i in roles.reverse()) {
        memberbyroles.push({
            name: roles[i].name,
            id: roles[i].id,
            members: [

            ]
        })
    }

    /*
    für jedes mitglied  

    hat das mitglied keine rollen dann ihn einfach bei @everyone einordnen

    memberbyroles durchgehen

    sobald eine rolle die aktuelle ist aufhören und das mitglied bei der aktuellen rolle einordnen
    
    */

    for (let i in members) {
        let m = members[i]
        
        if (m.roles.length === 0) {
            memberbyroles[memberbyroles.length - 1].members.push(m)
            // @everyone eindordnen
            continue
        } else {
            let t = false
            for (let j in memberbyroles) {
                if (t === true) {break} 
                for (let k in m.roles) {
                    if (memberbyroles[j].id === m.roles[k]) {
                        memberbyroles[j].members.push(m)
                        t = true
                        break
                    }
                }
            }
        }
    }

    return {
        members: memberbyroles
    }
})

