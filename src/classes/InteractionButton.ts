import { type ButtonBuilder, ButtonInteraction } from 'discord.js';

class InteractionButton {
	public id: string;
	public builder: ButtonBuilder;
	public execute: (interaction: ButtonInteraction) => Promise<void>;

	constructor(
		id: string,
		builder: ButtonBuilder,
		execute: (interaction: ButtonInteraction) => Promise<void>
	) {
		this.id = id;
		this.builder = builder;
		this.execute = execute;
	}
}

export default InteractionButton;
