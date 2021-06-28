module.exports = {
	name: 'roll',
	description: 'roll between 1-100',
	execute(message) {
		message.channel.send(`hmm u got  ${Math.floor(Math.random() * 100) + 1}`);
	},
};