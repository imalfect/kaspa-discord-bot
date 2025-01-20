import SlashCommand from '@/classes/SlashCommand.ts';
import NodeStatusEmbed from '@/embeds/NodeStatus.ts';
import { kaspa } from '@/kaspa';
import { SlashCommandScope } from '@/types/SlashCommandScope.ts';
import { type ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from 'discord.js';

const commandName = 'node-status';
const commandConfig = new SlashCommandBuilder()
	.setName(commandName)
	.setDescription('Check the node status.');

async function interactionHandler(interaction: ChatInputCommandInteraction) {
	const isNodeConnected = kaspa.isConnected;

	if (isNodeConnected) {
		const requestStart = performance.now();
		const dagInfo = await kaspa.getBlockDagInfo();
		const requestTime = performance.now() - requestStart;
		await interaction.reply({
			embeds: [
				NodeStatusEmbed({
					connected: true,
					daaScore: dagInfo.virtualDaaScore,
					network: dagInfo.network,
					requestTime: requestTime.toFixed(2)
				})
			],
			flags: MessageFlags.Ephemeral
		});
	} else {
		await interaction.reply({
			embeds: [NodeStatusEmbed({ connected: false })],
			flags: MessageFlags.Ephemeral
		});
	}
}

const NodeStatusCommand = new SlashCommand(
	commandName,
	commandConfig,
	SlashCommandScope.GLOBAL,
	interactionHandler
);

export default NodeStatusCommand;
