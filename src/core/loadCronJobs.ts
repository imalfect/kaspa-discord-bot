import { cronJobs } from '@/index.ts';
import { CronJob } from 'cron';
import fs from 'fs';
import path from 'path';

async function loadCronJobs() {
	const cronJobsPath = path.join(__dirname, '../cron/');
	const cronJobsFiles = fs
		.readdirSync(cronJobsPath)
		.filter((file) => file.endsWith('.ts') && !file.startsWith('_'));
	for (const file of cronJobsFiles) {
		const filePath = path.join(cronJobsPath, file);
		let cronjob = await import(filePath);
		cronjob = cronjob.default;
		if (cronjob instanceof CronJob) {
			let filename = path.parse(file).name;
			cronJobs.set(filename, cronjob);
			cronjob.start();
			console.log(`Loaded and started cronjob: ${filename}`);
		} else {
			console.warn(`The file at ${filePath} does not export a CronJob instance. Skipping.`);
		}
	}
}
export default loadCronJobs;
