import { client } from '@/index.ts';
import handleInteractionError from '@/util/handleInteractionError.ts';
import { type ButtonInteraction, type CacheType } from 'discord.js';

async function buttonInteraction(interaction: ButtonInteraction<CacheType>) {
	const { customId: buttonId } = interaction;
	console.debug(`Received button interaction: ${buttonId}`);
	const button = client.buttons.get(buttonId);

	if (!button) {
		console.warn(`Button from interaction called, but not found: ${buttonId}`);
		return;
	}
	try {
		await button.execute(interaction);
	} catch (e) {
		console.error(`Encountered an error while executing command ${e}`);
		await handleInteractionError(interaction, e);
	}
}

export default buttonInteraction;
