const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDc0MjU2NTYyNzA2NDQ4Mzg0.DkN2rA.jZVU8tfbWyLZ0XHTsKYL9t8Wky8')

bot.on('ready', function (){
    bot.user.setGame('Préparation du serveur :-)')
})
