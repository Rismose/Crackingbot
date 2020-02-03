module.exports = {
    name: "weclome",
    category: "moderation",
    description: "welcomes users",
    run: async (client, guildMemberAdd, guildMemberRemove, message, args, member) => {
            const guild1 = member.guild;
            if (!newUsers[guild1.id]) newUsers[guild1.id] = new Discord.Collection();
            newUsers[guild1.id].set(member.id, member.user);
          
            if (newUsers[guild1.id].size > 10) {
              const userlist = newUsers[guild1.id].map(u => u.toString()).join(" ");
              guild1.channels.find(channel => channel.name === "general").send("Welcome our new users!\n" + userlist);
              newUsers[guild1.id].clear();
            }
          
            const guild1 = member.guild;
            if (newUsers[guild1.id].has(member.id)) newUsers.delete(member.id);
          }
}
