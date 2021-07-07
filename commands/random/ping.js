module.exports = {
	name: 'ping',
	aliases: ['lat', 'ms', 'latency'],
	description: 'Ping!',
	execute(message) {
		message.channel.send('Pong.');
	},
};
