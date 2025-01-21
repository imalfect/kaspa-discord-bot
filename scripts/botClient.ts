// This script can be used to modify/create channels in the stats category
import { Client, Events, GatewayIntentBits } from 'discord.js';
export const client = new Client({
	intents: [GatewayIntentBits.Guilds]
});

// Bun has top-level await
await client.login(process.env.DISCORD_BOT_TOKEN);
client.once(Events.ClientReady, async () => {
	console.log('Client is ready');
});
