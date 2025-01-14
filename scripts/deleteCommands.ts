import { REST, Routes } from 'discord.js';
const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN as string);

async function deleteCommands() {
	try {
		console.log(`Started deleting application (/) commands.`);
		await rest
			.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID as string), { body: [] })
			.then(() => console.log('Successfully deleted all application commands.'))
			.catch(console.error);
		console.log(`Successfully deleted application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
}

//	noinspection JSIgnoredPromiseFromCall
deleteCommands();
