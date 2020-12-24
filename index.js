const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json");


bot.on("ready", async () =>{
    console.log("Le bot est allumé");
    bot.user.setStatus("dnd");
    setTimeout(() => {
        bot.user.setActivity("💗・Iton RP Soon", {type:'STREAMING'} );
    }, 100)    
});

bot.on("guildMemberAdd", member => {
    bot.channels.cache.get('790241060198023172').send(`Bienvenue sur 💗・Iton RP ${member}`);
    member.roles.add('790908590894350366');


})





    






   bot.login(process.env.token);
