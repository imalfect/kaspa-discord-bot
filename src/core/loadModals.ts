import type InteractionModal from '@/classes/InteractionModal.ts';
import type { ExtendedClient } from '@/types/ExtendedClient.ts';
import fs from 'fs';
import path from 'path';

async function loadButtons(client: ExtendedClient) {
	const modalsPath = path.join(__dirname, '../interactions/', 'modals');
	const modalsFiles = fs
		.readdirSync(modalsPath)
		.filter((file) => file.endsWith('.ts') && !file.startsWith('_'));
	for (const file of modalsFiles) {
		const filePath = path.join(modalsPath, file);
		let modal = await import(filePath);
		modal = modal.default;
		if (modal.builder && modal.execute && modal.id) {
			modal = modal as InteractionModal;
			client.modals.set(modal.id, modal);
			console.log(`Loaded modal: ${modal.id}`);
		} else {
			console.warn(
				`The modal at ${filePath} is missing a required "builder", "execute" or "id" property.`
			);
		}
	}
}
export default loadButtons;
