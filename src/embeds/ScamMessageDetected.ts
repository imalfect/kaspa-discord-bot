import sanitizeMessage from '@/util/sanitizeMessage';
import dayjs from 'dayjs';
import { EmbedBuilder } from 'discord.js';
export default function ScamMessageDetected(details: {
	message: string;
	confidence: number;
	userId: string;
	joinTimestamp: number;
	timeTaken: number;
}) {
	const embed = new EmbedBuilder()
		.setTitle('🛑 Potential Scam Message Detected')
		.setDescription(
			`
		Original Message:
		\`\`\`${details.message}\`\`\`
		Sanitized Message:
		\`\`\`${sanitizeMessage(details.message)}\`\`\`
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
	if (details.confidence < 0.75) {
		// yellow for medium confidence
		embed.setColor(0xffa500);
	} else if (details.confidence < 0.92) {
		// orange for high confidence
		embed.setColor(0xff8c00);
	} else {
		// red for very high confidence
		embed.setColor(0xff0000);
	}
}
