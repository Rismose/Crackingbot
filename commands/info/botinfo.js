module.exports = {
    name: "botinfo",
    category: "info",
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
                value: "1.0"
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
                text: "v.1.1"
            }}
        });
                
        
    }   
        
    
}