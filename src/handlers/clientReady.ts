import type { Client } from 'discord.js';

async function clientReady(client: Client<true>) {
	console.log(`Ready! Logged in as ${client.user.tag}`);
}

export default clientReady;
