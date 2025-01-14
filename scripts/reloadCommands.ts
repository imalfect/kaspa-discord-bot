import type SlashCommand from '@/classes/SlashCommand.ts';
import { Collection, REST, Routes } from 'discord.js';
import fs from 'fs';
import path from 'path';
const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN as string);
const commands = new Collection<string, SlashCommand>();
async function reloadCommands() {
	const commandsPath = path.join(__dirname, '../src/interactions/', 'commands');
	const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.ts'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		let command = await import(filePath);
		command = command.default;
		if (command.builder && command.execute && command.name) {
			command = command as SlashCommand;
			commands.set(command.name, command);
			console.info(`Loaded command: ${command.name}`);
		} else {
			console.warn(
				`The command at ${filePath} is missing a required "builder", "execute" or "name" property.`
			);
		}
	}
	try {
		console.log(`Started refreshing ${commands.size} application (/) commands.`);
		const data: unknown[] = (await rest.put(
			Routes.applicationCommands(process.env.DISCORD_CLIENT_ID as string),
			{
				body: commands.map((command) => command.builder.toJSON())
			}
		)) as unknown[];
		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
}

//	noinspection JSIgnoredPromiseFromCall
reloadCommands();
