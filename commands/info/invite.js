const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    category: "info",
    description: "Invites the bot",
    run: async (client, message, args) => {
        let inviteurl = `https://discord.com/api/oauth2/authorize?client_id=673300437163835415&permissions=8&scope=bot`
        const embed = new MessageEmbed();
        embed.addField(`Oh, you want to invite me to your server?`, `[Invite Link](${inviteurl})`);
        message.channel.send(embed)
    }
}