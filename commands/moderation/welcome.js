module.exports = {
    name: "weclome",
    category: "moderation",
    description: "welcomes users",
    run: async (client, message, args) => {
        client.on("guildMemberAdd", (member) => {
            const guild = member.guild;
            if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
            newUsers[guild.id].set(member.id, member.user);
          
            if (newUsers[guild.id].size > 10) {
              const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
              guild.channels.find(channel => channel.name === "general").send("Welcome our new users!\n" + userlist);
              newUsers[guild.id].clear();
            }
          });
          
          client.on("guildMemberRemove", (member) => {
            const guild = member.guild;
            if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
          }
        );
    }
}
