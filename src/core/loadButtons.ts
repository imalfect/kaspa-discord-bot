import type InteractionButton from '@/classes/InteractionButton.ts';
import type { ExtendedClient } from '@/types/ExtendedClient.ts';
import fs from 'fs';
import path from 'path';

async function loadButtons(client: ExtendedClient) {
	const buttonsPath = path.join(__dirname, '../interactions/', 'buttons');
	const buttonsFiles = fs.readdirSync(buttonsPath).filter((file) => file.endsWith('.ts'));
	for (const file of buttonsFiles) {
		const filePath = path.join(buttonsPath, file);
		let button = await import(filePath);
		button = button.default;
		if (button.builder && button.execute && button.id) {
			button = button as InteractionButton;
			client.buttons.set(button.id, button);
			console.log(`Loaded button: ${button.id}`);
		} else {
			console.warn(
				`The button at ${filePath} is missing a required "builder", "execute" or "id" property.`
			);
		}
	}
}
export default loadButtons;
