import { type ModalBuilder, ModalSubmitInteraction } from 'discord.js';

class InteractionModal {
	public id: string;
	public builder: ModalBuilder;
	public execute: (interaction: ModalSubmitInteraction) => Promise<void>;

	constructor(
		id: string,
		builder: ModalBuilder,
		execute: (interaction: ModalSubmitInteraction) => Promise<void>
	) {
		this.id = id;
		this.builder = builder;
		this.execute = execute;
	}
}

export default InteractionModal;
