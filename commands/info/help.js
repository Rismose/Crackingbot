module.exports = {
    name: "help",
    category: "info",
    description: "Shows help",
    run: async (client, message, args) => {
      {
            message.channel.send({embed: {
                color: 	1234567,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "***HELP MENU***",
                description: "***The commands for the bot***",
                fields: [{
                    name: "**!say (message)**",
                    value: "Makes Crackingbot say want you want it to if you have the right permissions."
                },
                {
                    name: "**!ping**",
                    value: "Gives you your ping."
                },
                {
                    name: "**!kick (user)**",
                    value: "Kicks the user if the moderator has the right premissions."
                },
                {
                    name: "**!random**",
                    value: "Displays a random number from 1 - 100"
                },
                {
                    name: "**!botinfo (or) !binfo**",
                    value: "Shows information about the bot."
                },
                {
                    name: "**!whois**",
                    value: "Shows information about the user."
                },
                {
                    name: "**!report (@user) (reason)**",
                    value: "Sends a report to staff to watch."
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "v.1.2.1"
            }}
        });
                
        
    }
}}