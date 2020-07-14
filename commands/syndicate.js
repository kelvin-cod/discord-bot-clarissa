const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const img = "https://external-preview.redd.it/ef_EGSa9X4s8ZXWrRgsjwO1ON44RMjexFrpW-ur2hcE.png?auto=webp&s=1f432d68e75a9812532bc9d01d86d8795cbaa4f2"; 
   const embed = new Discord.MessageEmbed()
    .setImage(img)

  //message.delete().catch(O_o => {});
  message.channel.send(embed);
}