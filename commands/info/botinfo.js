module.exports = {
    name: "binfo",
    category: "info",
    aliases: ["botinfo", "infobot"],
    description: "info about the bot",
    run: async (client, message, args) => {
        const msg = await message.channel.send({embed: {
            color: 	1234567,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "***BOT INFO***",
            description: "***About the bot***",
            fields: [{
                name: "**Version**",
                value: "v.1.2"
            },
            {
                name: "**Creator**",
                value: "Rismose#0079"
            },
            {
                name: "**Purpose**",
                value: "A project to relearn JavaScript"
            }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "v.1.2"
            }}
        });
                
        
    }   
        
    
}