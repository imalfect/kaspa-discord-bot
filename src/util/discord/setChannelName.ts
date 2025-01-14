import { client } from '@/index.ts';
export default async function setChannelName(channelId: string, newName: string) {
	const channel = await client.channels.fetch(channelId).catch(() => null);
	if (!channel) {
		throw new Error(`Channel with ID ${channelId} not found`);
	}
	if ('setName' in channel) {
		await channel.setName(newName);
	} else {
		throw new Error(`Channel Type with ID ${channelId} does not support setting the name`);
	}
}
