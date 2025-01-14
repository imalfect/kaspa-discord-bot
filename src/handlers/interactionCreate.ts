import buttonInteraction from '@/handlers/interactions/button.ts';
import commandInteraction from '@/handlers/interactions/command.ts';
import modalInteraction from '@/handlers/interactions/modal.ts';
import type { CacheType, ChatInputCommandInteraction, Interaction } from 'discord.js';

async function interactionCreate(interaction: Interaction<CacheType>) {
	if (interaction.isCommand()) {
		await commandInteraction(interaction as ChatInputCommandInteraction);
	}
	if (interaction.isButton()) {
		await buttonInteraction(interaction);
	}
	if (interaction.isModalSubmit()) {
		await modalInteraction(interaction);
	}
}

export default interactionCreate;
