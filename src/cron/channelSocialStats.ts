import { telegramChannel } from '@/config.ts';
import { StatsChannel } from '@/types/StatsChannel.ts';
import getGuildMemberCount from '@/util/discord/getGuildMemberCount.ts';
import updateStatsChannel from '@/util/discord/updateStatsChannel.ts';
import handleStatsRequestError from '@/util/handleStatsRequestError.ts';
import { formatNumber } from '@/util/numberFormatter.ts';
import getChatMemberCount from '@/util/telegram/getChatMemberCount.ts';
import { CronJob } from 'cron';

async function channelSocialStatsCron() {
	try {
		const discordGuildMembers = await getGuildMemberCount(
			process.env.DISCORD_GUILD_ID as string
		).catch(handleStatsRequestError);

		const telegramChatMembers = await getChatMemberCount(telegramChannel as string).catch(
			handleStatsRequestError
		);

		if (discordGuildMembers !== null)
			await updateStatsChannel(
				StatsChannel.DiscordMembers,
				`discord: ${formatNumber(discordGuildMembers, 0)}`
			);

		if (telegramChatMembers !== null)
			await updateStatsChannel(
				StatsChannel.TelegramMembers,
				`telegram: ${formatNumber(telegramChatMembers, 0)}`
			);
	} catch (e) {
		console.error(`An error encountered while running channelStatsCron: ${e}`);
	}
}

const channelSocialStats = new CronJob(
	'*/5 * * * *',
	channelSocialStatsCron,
	null,
	false,
	'America/Los_Angeles',
	null,
	null,
	null,
	null,
	true
);

export default channelSocialStats;
