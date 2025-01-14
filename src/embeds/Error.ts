import { EmbedBuilder } from 'discord.js';

export default function ErrorEmbed(error: string) {
	return new EmbedBuilder()
		.setColor(0xff0000)
		.setTitle('An error occurred')
		.setDescription('There was an error while executing this command! ```' + error + '```')
		.setTimestamp()
		.setFooter({ text: process.env.BOT_NAME as string });
}
