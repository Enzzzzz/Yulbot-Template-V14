const client = require('..');
const chalk = require('chalk');
const ms = require('ms')
const mongoose = require("mongoose")
const mongodbURL = process.env.DATABASE


const activities_list = [
	`Online em ${client.guilds.cache.size} servidores`,  
	`Digite /help para ver meus comandos`,
	`Veja meus comandos Slash {/}`, 
	];

client.on("ready", () => {


	const { user, ws } = client;
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
		user.setActivity({ name: `${activities_list[index]}`, type: 3, })
	}, ms("5s"))
	
        if (!mongodbURL) return

        mongoose.set("strictQuery", false);
        mongoose.connect(mongodbURL, {
        
          useNewUrlParser: true,
          useUnifiedTopology: true
        
        }).then(() => {
        
          console.log("Conectado a Database!")
        
        }).catch(err => console.log(err))

	console.log(chalk.red(`${client.user.username} online!`))
});
