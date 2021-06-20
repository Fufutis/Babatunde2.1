// require the discord.js module
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});
/*
client.on('message', message => {
	console.log(message.content);
});*/
client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong');
	}
	else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop');
	}
	else if (message.content === `${prefix}server`) {
		message.channel.send(`DIS IS DA ${message.guild.name} DA ONE OF A KIND`);
	}
	else if (message.content === `${prefix}name`) {
		message.channel.send(`YO NAME IS ${message.author.username}`);
	}
});
<<<<<<< Updated upstream
=======
// Create an event listener for messages
client.on('message', message => {
	// If the message is "what is my avatar" replaced it with showme me
	if (message.content === 'showme me') {
		// Send the user's avatar URL
		message.reply(message.author.displayAvatarURL());
	}
});
>>>>>>> Stashed changes
// login to Discord with your app's token
client.login(token);