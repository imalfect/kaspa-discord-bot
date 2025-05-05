import SlashCommand from '@/classes/SlashCommand.ts';
import secondsUntilCrescendo from '@/kaspa/function/secondsUntilCrescendo.ts';
import { SlashCommandScope } from '@/types/SlashCommandScope.ts';
import dayjs from 'dayjs';
import { type ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

const commandName = 'crescendo';
const commandConfig = new SlashCommandBuilder()
	.setName(commandName)
	.setDescription('Check the time before the Crescendo Hard Fork activation.');

async function interactionHandler(interaction: ChatInputCommandInteraction) {
	const remaining = await secondsUntilCrescendo();
	const currentTime = dayjs();
	const targetTime = currentTime.add(remaining, 'seconds');
	const difference = targetTime.diff(currentTime);
	console.log(`Crescendo countdown: ${difference}`);
	if (difference < 0) {
		await interaction.reply({
			content: 'Crescendo is already activated 😎'
		});
	} else {
		const duration = dayjs.duration(difference);
		const formattedDuration = duration.format('H [hours], m [minutes] [and] s [seconds]');
		await interaction.reply({
			content: 'Crescendo will activate in ' + formattedDuration
		});
	}
}

const CrescendoCommand = new SlashCommand(
	commandName,
	commandConfig,
	SlashCommandScope.GLOBAL,
	interactionHandler
);

export default CrescendoCommand;
