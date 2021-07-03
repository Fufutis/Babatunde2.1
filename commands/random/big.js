module.exports = {
	name: 'big',
	description: 'Ping!',
	execute(message) {
		message.reply(message.author.displayAvatarURL());
	},
};