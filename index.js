const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");

const prefix = "!";

const client = new Client({
    disableEveryone: true
})

const newUsers = [];

// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

let status = 1;

client.on("ready", () => {
    console.log("Ready!");
    setInterval(()=>statusSwitch(), 7500)
});

function statusSwitch() {
    if(status==1) {
            status = 2;
            client.editStatus("dnd", {
                    name: `${prefix}help | ${process.env.version}`,
                    type: 2
             });
    } else if (status==2) {
            status = 1;
            client.editStatus("dnd", {
                    name: client.guilds.size+" servers",
                    type: 3
             });
    }
}


client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});

client.login(process.env.token); //just bcs

