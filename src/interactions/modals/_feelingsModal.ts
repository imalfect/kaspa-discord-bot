import InteractionModal from '@/classes/InteractionModal.ts';
import {
	ActionRowBuilder,
	ModalBuilder,
	type ModalSubmitInteraction,
	TextInputBuilder,
	TextInputStyle
} from 'discord.js';
const modalId = 'feelingsModal';

export const modalConfig = new ModalBuilder().setCustomId(modalId).setTitle('Modify Destination');

const feelingsInput = new TextInputBuilder()
	.setCustomId('feelingsInput')
	.setLabel('How are you today?')
	.setStyle(TextInputStyle.Short);

const firstActionRow = new ActionRowBuilder().addComponents(feelingsInput);

// Add inputs to the modal
// @ts-expect-error ask djs
modalConfig.addComponents(firstActionRow);

async function interactionHandler(interaction: ModalSubmitInteraction) {
	const userFeelings = interaction.fields.getTextInputValue('feelingsInput');
	await interaction.reply({
		content: `You are feeling ${userFeelings} today!`
	});
}

const ModifyDestinationModal = new InteractionModal(modalId, modalConfig, interactionHandler);

export default ModifyDestinationModal;
