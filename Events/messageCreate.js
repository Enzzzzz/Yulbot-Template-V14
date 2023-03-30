const { Message } = require('discord.js');
const client = require('../index');
const talkedRecently = new Set();



// Evento feito para sistema de nível. Se o seu bot não possui sistema de níveis, você pode remover esse arquivo!

// Event made for leveling system. If your bot dont have this system, you can delet this file!


client.on('messageCreate', async Message => { 

    if (!Message.guild) return;
    if (Message.author.bot) return;
    if (talkedRecently.has(Message.author.id)) return;

    talkedRecently.add(Message.author.id);
    setTimeout(() => {
        talkedRecently.delete(Message.author.id);
    }, 5000)



})
