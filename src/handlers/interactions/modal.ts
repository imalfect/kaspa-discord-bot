import { client } from '@/index.ts';
import handleInteractionError from '@/util/handleInteractionError.ts';
import { type CacheType, type ModalSubmitInteraction } from 'discord.js';

async function modalInteraction(interaction: ModalSubmitInteraction<CacheType>) {
	const { customId: modalId } = interaction;
	console.debug(`Received modal interaction: ${modalId}`);
	const modal = client.modals.get(modalId);

	if (!modal) {
		console.warn(`Modal from interaction called, but not found: ${modal}`);
		return;
	}
	try {
		await modal.execute(interaction);
	} catch (e) {
		console.error(`Encountered an error while executing command ${e}`);
		await handleInteractionError(interaction, e);
	}
}

export default modalInteraction;
