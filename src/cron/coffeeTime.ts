import { CronJob } from 'cron';

function coffeeCron() {
	console.log('Coffee time!');
}

// Regular cron job that runs every 5 seconds
const coffeeTime = new CronJob('*/5 * * * * *', coffeeCron, null, true, 'America/Los_Angeles');

export default coffeeTime;
