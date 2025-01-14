import { EmbedBuilder } from 'discord.js';

export default function PongEmbed() {
	return new EmbedBuilder()
		.setColor(0x00ff00)
		.setTitle('🏓 Pong!')
		.setDescription('Pong! 🏓')
		.setTimestamp()
		.setFooter({ text: process.env.BOT_NAME as string });
}
