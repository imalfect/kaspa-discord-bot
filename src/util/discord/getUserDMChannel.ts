import type { Client, User } from 'discord.js';

export default async function getUserDMChannel(client: Client, userId: string) {
	let user: User;
	if (!client.users.cache.has(userId)) {
		user = await client.users.fetch(userId);
	} else {
		user = client.users.cache.get(userId)!;
	}
	if (!user) {
		return null;
	}
	return user.dmChannel || (await user.createDM()) || null;
}
