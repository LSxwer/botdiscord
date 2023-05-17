const { REST, Routes, userMention, ApplicationCommandOptionType, ApplicationCommandType, Options } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const { type } = require('node:os');

const commands = [
	{
		name:'perm',
		description:'@everyone',
	},





	{
		name:'elochecker',
		description:'check ur random eloo'
	}


	
	

	


]

const rest = new REST().setToken(token);


(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		
		console.error(error);
	}
})();
