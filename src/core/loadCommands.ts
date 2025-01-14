import type SlashCommand from '@/classes/SlashCommand.ts';
import type { ExtendedClient } from '@/types/ExtendedClient.ts';
import fs from 'fs';
import path from 'path';

async function loadCommands(client: ExtendedClient) {
	const commandsPath = path.join(__dirname, '../interactions/', 'commands');
	const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.ts'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		let command = await import(filePath);
		command = command.default;
		if (command.builder && command.execute && command.name) {
			command = command as SlashCommand;
			client.commands.set(command.name, command);
			console.info(`Loaded command: ${command.name}`);
		} else {
			console.warn(
				`The command at ${filePath} is missing a required "builder", "execute" or "name" property.`
			);
		}
	}
}
export default loadCommands;
