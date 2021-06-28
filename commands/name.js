module.exports = {
	name: 'name',
	description: '',
	execute(message) {
		message.channel.send(`YO NAME IS ${message.author.username}`);
	},
};