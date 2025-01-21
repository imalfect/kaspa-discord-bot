import loadCronJobs from '@/core/loadCronJobs.ts';
import { ActivityType, type Client } from 'discord.js';

async function clientReady(client: Client<true>) {
	loadCronJobs().then(() => {
		console.info('Loaded cron jobs');
	});
	client.user?.setActivity(process.env.BOT_STATUS as string, {
		type: ActivityType.Watching
	});
	console.info(`Ready! Logged in as ${client.user.tag}`);
}

export default clientReady;
