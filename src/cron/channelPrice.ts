import { priceCoinId, priceCurrency } from '@/config.ts';
import { StatsChannel } from '@/types/StatsChannel.ts';
import getCoinPrice from '@/util/coingecko/getCoinPrice.ts';
import updateStatsChannel from '@/util/discord/updateStatsChannel.ts';
import handleStatsRequestError from '@/util/handleStatsRequestError.ts';
import { CronJob } from 'cron';

async function channelPriceCron() {
	try {
		const kaspaPrice = await getCoinPrice(priceCoinId, priceCurrency).catch(handleStatsRequestError);
		if (kaspaPrice !== null) {
			await updateStatsChannel(
				StatsChannel.Price,
				`price: ${kaspaPrice.toFixed(4)} ${priceCurrency.toUpperCase()}`
			);
		}
	} catch (e) {
		console.error(`An error encountered while running channelPriceCron: ${e}`);
	}
}

const channelPrice = new CronJob(
	'*/5 * * * *',
	channelPriceCron,
	null,
	false,
	'America/Los_Angeles',
	null,
	false,
	null,
	null,
	true
);
export default channelPrice;
