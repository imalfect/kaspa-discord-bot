import { twitterHandle } from '@/config.ts';
import { StatsChannel } from '@/types/StatsChannel.ts';
import updateStatsChannel from '@/util/discord/updateStatsChannel.ts';
import handleStatsRequestError from '@/util/handleStatsRequestError.ts';
import { formatNumber } from '@/util/numberFormatter.ts';
import getUserFollowersCount from '@/util/x/getUserFollowersCount.ts';
import { CronJob } from 'cron';

// The reason twitter is separate is, because the weird api is limited to 1,000 requests a month
// so that's a bit over 1 request an hour allowed at most.
async function channelXFollowersCron() {
	try {
		const xFollowers = await getUserFollowersCount(twitterHandle).catch(handleStatsRequestError);

		if (xFollowers !== null)
			await updateStatsChannel(
				StatsChannel.XFollowers,
				`X (ex-Twitter): ${formatNumber(xFollowers, 0)}`
			);
	} catch (e) {
		console.error(`An error encountered while running channelXFollowersCron: ${e}`);
	}
}

const channelXFollowers = new CronJob(
	'0 0 * * * *',
	channelXFollowersCron,
	null,
	true,
	'America/Los_Angeles',
	null,
	false,
	null,
	null,
	true
);

export default channelXFollowers;
