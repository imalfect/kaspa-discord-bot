import { EmbedBuilder } from 'discord.js';

export default function NodeStatusEmbed(status: {
	connected: boolean;
	daaScore?: bigint;
	network?: string;
	requestTime?: string;
}) {
	return new EmbedBuilder()
		.setColor(0x70c7ba)
		.setTitle('⛓️ Node Status')
		.addFields([
			{
				name: 'Connection status',
				value: status.connected ? 'Connected ✅' : 'Disconnected ❌',
				inline: false
			},
			{
				name: 'Network',
				value: status.network || 'N/A',
				inline: false
			},
			{
				name: 'DAA Score',
				value: status.daaScore ? status.daaScore.toLocaleString() : 'N/A',
				inline: false
			},
			{
				name: 'Request Time',
				value: status.requestTime ? `${status.requestTime}ms` : 'N/A',
				inline: false
			}
		])
		.setTimestamp()
		.setFooter({ text: process.env.BOT_NAME as string });
}
