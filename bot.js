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
	switch (message.content) {
	case `${prefix} ping`:
		message.channel.send('1Poong');
		break;
	case `${prefix} beep`:
		message.channel.send('1boop');
		break;
	case `${prefix} server`:
		message.channel.send(`1DIS IS DA ${message.guild.name} DA ONE OF A KIND`);
		break;
	case `${prefix} name`:
		message.channel.send(`1YO NAME IS ${message.author.username}`);
		break;
	case `${prefix} roll`:
		message.channel.send(`1hmm u got  ${Math.floor(Math.random() * 100) + 1}`);
		break;
	case `${prefix} showme me`:
		message.reply(message.author.displayAvatarURL());
		break;
	default:
		console.log('i skipped a msg');
	}
});
// Create an event listener for messages
client.on('message', message => {
	// If the message is "what is my avatar" replaced it with showme me
	if (message.content === 'showme me') {
		// Send the user's avatar URL
		message.reply(message.author.displayAvatarURL());
	}
});
// login to Discord with your app's token
client.login(token);