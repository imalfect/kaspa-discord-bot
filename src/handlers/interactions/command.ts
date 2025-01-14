import ScopeMismatchEmbed from '@/embeds/ScopeMismatch.ts';
import { client } from '@/index.ts';
import { SlashCommandScope } from '@/types/slashCommandScope.ts';
import handleInteractionError from '@/util/handleInteractionError.ts';
import { type CacheType, ChatInputCommandInteraction } from 'discord.js';

async function commandInteraction(interaction: ChatInputCommandInteraction<CacheType>) {
	const { commandName } = interaction;
	console.debug(`Received command: ${commandName}`);
	const command = client.commands.get(commandName);

	if (!command) {
		console.warn(`Command from interaction called, but not found: ${commandName}`);
		return;
	}
	if (!interaction.guildId && command.scope === SlashCommandScope.GUILD) {
		await interaction.reply({
			embeds: [ScopeMismatchEmbed(SlashCommandScope.GUILD)],
			ephemeral: true
		});
		return;
	} else if (interaction.guildId && command.scope === SlashCommandScope.DIRECT_MESSAGE) {
		await interaction.reply({
			embeds: [ScopeMismatchEmbed(SlashCommandScope.DIRECT_MESSAGE)],
			ephemeral: true
		});
		return;
	}
	try {
		await command.execute(interaction);
	} catch (e: unknown) {
		await handleInteractionError(interaction, e);
	}
}

export default commandInteraction;
