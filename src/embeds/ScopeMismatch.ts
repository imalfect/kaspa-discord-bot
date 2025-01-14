import { SlashCommandScope } from '@/types/slashCommandScope.ts';
import { EmbedBuilder } from 'discord.js';

export default function ScopeMismatch(
	validScope: Exclude<SlashCommandScope, SlashCommandScope.GLOBAL>
) {
	return new EmbedBuilder()
		.setColor(0xff7300)
		.setTitle('This command cannot run here')
		.setDescription(
			`This command can only be ran in ${validScope === SlashCommandScope.GUILD ? 'servers' : 'DMs'}`
		)
		.setTimestamp()
		.setFooter({ text: process.env.BOT_NAME as string });
}
