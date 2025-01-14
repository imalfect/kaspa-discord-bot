import type InteractionButton from '@/classes/InteractionButton.ts';
import type InteractionModal from '@/classes/InteractionModal.ts';
import type SlashCommand from '@/classes/SlashCommand.ts';
import type { Client, Collection } from 'discord.js';

export interface ExtendedClient extends Client {
	commands: Collection<string, SlashCommand>;
	buttons: Collection<string, InteractionButton>;
	modals: Collection<string, InteractionModal>;
}
