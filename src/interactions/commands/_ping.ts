import SlashCommand from '@/classes/SlashCommand.ts';
import FeelingsSurveyButton from '@/interactions/buttons/_feelingsSurvey.ts';
import HelloButton from '@/interactions/buttons/_hello.ts';
import { SlashCommandScope } from '@/types/SlashCommandScope.ts';
import {
	ActionRowBuilder,
	ButtonBuilder,
	type ChatInputCommandInteraction,
	SlashCommandBuilder
} from 'discord.js';

const commandName = 'ping';
const commandConfig = new SlashCommandBuilder()
	.setName(commandName)
	.setDescription('Time to play some ping	pong!');

const row = new ActionRowBuilder<ButtonBuilder>().addComponents([
	HelloButton.builder,
	FeelingsSurveyButton.builder
]);

async function interactionHandler(interaction: ChatInputCommandInteraction) {
	await interaction.reply({
		content: 'Pong!',
		components: [row]
	});
}

const PingCommand = new SlashCommand(
	commandName,
	commandConfig,
	SlashCommandScope.GLOBAL,
	interactionHandler
);

export default PingCommand;
