function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

module.exports = {
    name: "random",
    category: "fun",
    aliases: ["r", "number"],
    description: "random number",
    run: async (client, message, args) => {
        const msg = await message.channel.send({embed: {
            color: 	1234567,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "***" + getRandomInt(1, 100) + "***",
            description: "Random Number 1 - 100",
                }
            })}}