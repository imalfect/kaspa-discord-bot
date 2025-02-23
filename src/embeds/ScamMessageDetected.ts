import dayjs from 'dayjs';
import { EmbedBuilder } from 'discord.js';

export default function ScamMessageDetected(details: {
	message: string;
	confidence: number;
	userId: string;
	joinTimestamp: number;
	timeTaken: number;
}) {
	return new EmbedBuilder()
		.setColor(0xff0000)
		.setTitle('🛑 Potential Scam Message Detected')
		.setDescription(
			`
		\`\`\`${details.message}\`\`\`
		`
		)
		.addFields([
			{
				name: 'Confidence',
				value: details.confidence.toFixed(2),
				inline: true
			},
			{
				name: 'User',
				value: `<@${details.userId}>`,
				inline: true
			},
			{
				name: 'Server membership age',
				value: `${dayjs(details.joinTimestamp).toNow(true)}`,
				inline: true
			},
			{
				name: 'Time taken',
				value: `${details.timeTaken.toFixed(2)}ms`,
				inline: true
			}
		])
		.setTimestamp()
		.setFooter({ text: process.env.BOT_NAME as string });
}
