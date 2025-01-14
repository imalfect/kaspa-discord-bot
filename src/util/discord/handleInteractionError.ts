import ErrorEmbed from '@/embeds/Error.ts';
import type {
	ButtonInteraction,
	ChatInputCommandInteraction,
	ModalSubmitInteraction
} from 'discord.js';

export default async function handleInteractionError(
	interaction: ChatInputCommandInteraction | ButtonInteraction | ModalSubmitInteraction,
	error: unknown
) {
	console.error(`An error occurred while handling an interaction: ${error}`);
	let errorMessage;

	//	@ts-expect-error errors can be different things
	errorMessage = error?.message || 'An unknown error occurred.';

	const errorEmbed = ErrorEmbed(errorMessage);

	if (interaction.deferred || interaction.replied) {
		await interaction.editReply({
			embeds: [errorEmbed]
		});
		return;
	}
	await interaction.reply({
		embeds: [errorEmbed]
	});
}
