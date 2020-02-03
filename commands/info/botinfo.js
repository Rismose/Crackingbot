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
                value: "1.2.1 Pre-Release."
            },
            {
                name: "**Creator**",
                value: "Rismose#1887."
            },
            {
                name: "**Purpose**",
                value: "To show the judges I learnt JS again in less than 24h"
            }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "v.1.2.2"
            }}
        });
                
        
    }   
        
    
}