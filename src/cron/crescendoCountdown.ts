import secondsUntilCrescendo from '@/kaspa/function/secondsUntilCrescendo.ts';
import { StatsChannel } from '@/types/StatsChannel.ts';
import updateStatsChannel from '@/util/discord/updateStatsChannel.ts';
import { CronJob } from 'cron';
import dayjs from 'dayjs';

async function crescendoCron() {
	const remaining = await secondsUntilCrescendo();
	// use dayjs to format remaining time to hours, minutes, seconds
	const currentTime = dayjs();
	const targetTime = currentTime.add(remaining, 'seconds');
	const difference = targetTime.diff(currentTime);
	console.log(`Crescendo countdown: ${difference}`);
	if (difference < 0) {
		await updateStatsChannel(StatsChannel.CrescendoCountdown, 'Activated 😎');
	} else {
		const duration = dayjs.duration(difference);
		const formattedDuration = duration.format('H[h] m[m] s[s]');
		await updateStatsChannel(StatsChannel.CrescendoCountdown, `${formattedDuration}`);
	}
}

const crescendoCountdown = new CronJob(
	'*/5 * * * *',
	crescendoCron,
	null,
	false,
	'America/Los_Angeles',
	null,
	false,
	null,
	null,
	true
);

export default crescendoCountdown;
