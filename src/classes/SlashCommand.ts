import type { SlashCommandScope } from '@/types/SlashCommandScope.ts';
import {
	type ChatInputCommandInteraction,
	SlashCommandBuilder,
	type SlashCommandOptionsOnlyBuilder
} from 'discord.js';
class SlashCommand {
	public name: string;
	public builder: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder;
	public scope: SlashCommandScope;
	public execute: (interaction: ChatInputCommandInteraction) => Promise<void>;

	constructor(
		name: string,
		builder: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder,
		scope: SlashCommandScope,
		execute: (interaction: ChatInputCommandInteraction) => Promise<void>
	) {
		this.name = name;
		this.builder = builder;
		this.execute = execute;
		this.scope = scope;
	}
}

export default SlashCommand;
