module.exports = {
    name: "weclome",
    category: "moderation",
    description: "welcomes users",
    run: async (client, message, args, guildMemberAdd, guildMemberRemove, member) => {
        client.on("guildMemberAdd", (member) => {
            newUsers.set(member.id, member.user);
          });
          client.on("guildMemberRemove", (member) => {
            if(newUsers.has(member.id)) newUsers.delete(member.id);
          });
          client.on("guildMemberAdd", (member) => {
            const guild = member.guild;
            newUsers.set(member.id, member.user);
          
            if (newUsers.size > 10) {
              const defaultChannel = guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
              const userlist = newUsers.map(u => u.toString()).join(" ");
              defaultChannel.send("Welcome our new users!\n" + userlist);
              newUsers.clear();
            }
          }
        );
    }
}