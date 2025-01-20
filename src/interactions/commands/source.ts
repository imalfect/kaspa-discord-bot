import SlashCommand from '@/classes/SlashCommand.ts';
import SourceCodeEmbed from '@/embeds/SourceCode.ts';
import { SlashCommandScope } from '@/types/SlashCommandScope.ts';
import { type ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from 'discord.js';

const commandName = 'source';
const commandConfig = new SlashCommandBuilder()
	.setName(commandName)
	.setDescription('View the source code of the bot.');

async function interactionHandler(interaction: ChatInputCommandInteraction) {
	await interaction.reply({
		embeds: [SourceCodeEmbed()],
		flags: MessageFlags.Ephemeral
	});
}

const SourceCodeCommand = new SlashCommand(
	commandName,
	commandConfig,
	SlashCommandScope.GLOBAL,
	interactionHandler
);

export default SourceCodeCommand;
