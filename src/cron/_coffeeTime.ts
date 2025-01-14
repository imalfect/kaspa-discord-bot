// EXAMPLE
import { CronJob } from 'cron';

function coffeeCron() {
	console.log('Coffee time!');
}

const coffeeTime = new CronJob('* * * * * *', coffeeCron, null, false, 'America/Los_Angeles');

export default coffeeTime;
