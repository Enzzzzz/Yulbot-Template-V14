const client = require('..');
const chalk = require('chalk');
const ms = require('ms')


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

	console.log(chalk.red(`${client.user.username} online!`))
});