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
import type { ExtendedClient } from '@/types/ExtendedClient.ts';
import type { CronJob } from 'cron';
import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
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
