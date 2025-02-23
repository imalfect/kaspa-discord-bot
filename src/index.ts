// noinspection JSIgnoredPromiseFromCall

import type InteractionButton from '@/classes/InteractionButton.ts';
import type InteractionModal from '@/classes/InteractionModal.ts';
import type SlashCommand from '@/classes/SlashCommand.ts';
import loadButtons from '@/core/loadButtons.ts';
import loadCommands from '@/core/loadCommands.ts';
import loadModals from '@/core/loadModals.ts';
import reloadCommands from '@/core/reloadCommands.ts';
import clientReady from '@/handlers/clientReady.ts';
import interactionCreate from '@/handlers/interactionCreate.ts';
import messageCreate from '@/handlers/messageCreate.ts';
import { ScamClassifier } from '@/scam-classification';
import type { ExtendedClient } from '@/types/ExtendedClient.ts';
import type { CronJob } from 'cron';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import 'modernlog/patch';

dayjs.extend(relativeTime);

export const client: ExtendedClient = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
}) as ExtendedClient;

export const cronJobs = new Map<string, CronJob>();

export const scamClassifier = new ScamClassifier(process.env.SCAM_CLASSIFIER_API_URL as string);

client.commands = new Collection<'string', SlashCommand>();
client.buttons = new Collection<'string', InteractionButton>();
client.modals = new Collection<'string', InteractionModal>();

client.once(Events.ClientReady, clientReady);
client.on(Events.InteractionCreate, interactionCreate);
client.on(Events.MessageCreate, messageCreate);

loadCommands(client).then(() => {
	console.info('Loaded commands');
	loadButtons(client).then(() => {
		console.info('Loaded buttons');
	});
	reloadCommands(client.commands);
	client.login(process.env.DISCORD_BOT_TOKEN);
});

loadModals(client).then(() => {
	console.info('Loaded modals');
});
