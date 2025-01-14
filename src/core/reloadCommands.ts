import type { ExtendedClient } from '@/types/ExtendedClient.ts';
import { REST, Routes } from 'discord.js';
const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN as string);

async function reloadCommands(commands: ExtendedClient['commands']) {
	try {
		console.log(`Started refreshing ${commands.size} application (/) commands.`);
		// await rest
		// 	.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID as string), { body: [] })
		// 	.then(() => console.log('Successfully deleted all application commands.'))
		// 	.catch(console.error);
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

export default reloadCommands;
