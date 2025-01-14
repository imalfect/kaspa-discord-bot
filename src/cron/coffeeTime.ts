import { CronJob } from 'cron';

function coffeeCron() {
	console.log('Coffee time!');
}

// Regular cron job that runs every 5 seconds
const coffeeTime = new CronJob('*/60 * * * * *', coffeeCron, null, false, 'America/Los_Angeles');

export default coffeeTime;
