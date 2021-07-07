module.exports = {
	name: 'help',
	aliases: ['commands'],
	description: 'List all of my commands or info about a specific command.',
	execute(message) {
		if(message.content == 'baba help avatar') {
			message.channel.send('asd');
		}
		else if(message.content == 'baba help name') {
			message.channel.send('name');
		}
		else if(message.content == 'baba help ping') {
			message.channel.send('ping');
		}
		else if(message.content == 'baba help roll') {
			message.channel.send('roll');
		}
		else if(message.content == 'baba help server') {
			message.channel.send('server');
		}
		else if(message.content == 'baba help join') {
			message.channel.send('join');
		}
		else {
			message.channel.send('```avatar,name,ping,roll,server,join```');
		}
	},
};
