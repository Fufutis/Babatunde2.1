module.exports = (client, aliases, callback) => {
	if(typeof aliases === 'string') {
		aliases = [aliases];
	}
	client.on('message', message => {
		const { content } = message;

		aliases.forEach(alias => {
			const command = `${alias}`;
			// removed prefix from line 9 and its const
			if (content.startsWith(`${command} `) || content === command) {
				console.log(`running the command ${command}`);
				callback(message);
			}
		});
	});
};


/* const { prefix } = require('./config.json');
module.exports = (client, aliases, callback) => {
	if(typeof aliases === 'string') {
		aliases = [aliases];
	}
	client.on('message', message => {
		const { content } = message;

		aliases.forEach(alias => {
			const command = `${prefix}${alias}`;

			if (content.startsWith(`${command} `) || content === command) {
				console.log(`running the command ${command}`);
				callback(message);
			}
		});
	});
};*/

