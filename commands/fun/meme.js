const { MessageEmbed } = require("discord.js");
const got = require('got');

module.exports = {
    name: "meme",
    category: "fun",
    description: "Sends an epic meme",
    run: async (client, message, args) => {
        // In this array, 
        // you can put the subreddits you want to grab memes from
        const subReddits = ["dankmeme", "meme", "me_irl", "memes", "boomermeme", "memeeconomy", "BikiniBottomTwitter", "Memes_Of_The_Dank"];
        
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    
        const embed = new MessageEmbed();
        got(`https://www.reddit.com/r/${random}/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            embed.addField(`${memeTitle}`, `[View post](${memeUrl})`);
            embed.setImage(memeImage);
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} | Totally not skidded from Atex`);
            message.channel.send(embed)
            console.log(memeUrl)
        })}}