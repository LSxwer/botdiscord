
const { Client, Events, GatewayIntentBits, userMention, MentionableSelectMenuBuilder } = require('discord.js');
const { token } = require('./config.json');

const rand = Math.random().toString().substr(1, 4)







const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'perm') {
		await interaction.reply({ content: '@everyone', ephemeral: false });
	}
	if (interaction.commandName === 'elochecker'){
		await interaction.reply({ content : 'elo:' ,ephemeral:false}); 
	}
	
	
	
	
	

	 
});



client.login(token);
