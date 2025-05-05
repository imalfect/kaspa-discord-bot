import SlashCommand from '@/classes/SlashCommand.ts';
import { interactionHandler } from '@/interactions/commands/crescendo.ts';
import { SlashCommandScope } from '@/types/SlashCommandScope.ts';
import { SlashCommandBuilder } from 'discord.js';

const commandName = 'wen';
const commandConfig = new SlashCommandBuilder()
	.setName(commandName)
	.setDescription('Check the time before the Crescendo Hard Fork activation.');

const CrescendoCommand = new SlashCommand(
	commandName,
	commandConfig,
	SlashCommandScope.GLOBAL,
	interactionHandler
);

export default CrescendoCommand;
