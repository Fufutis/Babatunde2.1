module.exports = {
	name: 'server',
	description: 'just shows the name of your server',
	guildOnly: true,
	execute(message) {
		message.channel.send(`DIS IS DA ${message.guild.name} DA ONE OF A KIND`.toUpperCase());
	},
};
