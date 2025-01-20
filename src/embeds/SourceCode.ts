import { EmbedBuilder } from 'discord.js';

export default function SourceCodeEmbed() {
	return new EmbedBuilder()
		.setColor(0x70c7ba)
		.setTitle('👨‍💻 Source Code')
		.setDescription(
			"You can view the source code of this bot on the [GitHub repository](https://github.com/imalfect/kaspa-discord-bot), it's licensed under GNU GPL v3."
		)
		.setTimestamp()
		.setFooter({ text: process.env.BOT_NAME as string });
}
