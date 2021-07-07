module.exports = {
	name: 'join',
	description: 'baba will join your vc!',
	guildOnly: true,
	execute(message) {
		const { voice } = message.member;
		if (!voice.channelID) {
			message.reply('Eee u go first');
		}
		else {voice.channel.join();}
	},
};