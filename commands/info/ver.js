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
                description: "***The commands for the bot***"
                }
            }     
        )}
        }
}