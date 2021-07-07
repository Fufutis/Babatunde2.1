module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp', 'big'],
	description: 'Ping!',
	execute(message) {
		message.channel.send(message.author.displayAvatarURL());
	},
};