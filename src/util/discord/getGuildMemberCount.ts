import { client } from '@/index.ts';

export default async function getGuildMemberCount(guildId: string) {
	const guild = await client.guilds.fetch(guildId);
	return guild.memberCount;
}
