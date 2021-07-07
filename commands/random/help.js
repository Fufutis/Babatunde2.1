module.exports = {
	name: 'help',
	aliases: ['commands'],
	description: 'List all of my commands or info about a specific command.',
	execute(message) {
		message.channel.send('```Avatar,name,ping,roll,server,join ```');
	},
};
