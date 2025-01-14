import type InteractionButton from '@/classes/InteractionButton.ts';
import type InteractionModal from '@/classes/InteractionModal.ts';
import type SlashCommand from '@/classes/SlashCommand.ts';
import loadButtons from '@/core/loadButtons.ts';
import loadCommands from '@/core/loadCommands.ts';
import loadCronJobs from '@/core/loadCronJobs.ts';
import loadModals from '@/core/loadModals.ts';
import reloadCommands from '@/core/reloadCommands.ts';
import clientReady from '@/handlers/clientReady.ts';
import interactionCreate from '@/handlers/interactionCreate.ts';
import type { ExtendedClient } from '@/types/ExtendedClient.ts';
import type { CronJob } from 'cron';
import { ActivityType, Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import 'modernlog/patch';

export const client: ExtendedClient = new Client({
	intents: [GatewayIntentBits.Guilds]
}) as ExtendedClient;

export const cronJobs = new Map<string, CronJob>();

client.commands = new Collection<'string', SlashCommand>();
client.buttons = new Collection<'string', InteractionButton>();
client.modals = new Collection<'string', InteractionModal>();

client.once(Events.ClientReady, clientReady);
client.on(Events.InteractionCreate, interactionCreate);

loadCommands(client).then(() => {
	console.log('Loaded commands');
	loadButtons(client).then(() => {
		console.log('Loaded buttons');
	});
	// noinspection JSIgnoredPromiseFromCall
	reloadCommands(client.commands);
	client.login(process.env.DISCORD_BOT_TOKEN).then(async () => {
		loadCronJobs().then(() => {
			console.log('Loaded cron jobs');
		});
		client.user?.setActivity(process.env.BOT_STATUS as string, {
			type: ActivityType.Watching
		});
	});
});

loadModals(client).then(() => {
	console.log('Loaded modals');
});
