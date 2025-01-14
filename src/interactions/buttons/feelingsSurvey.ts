import InteractionButton from '@/classes/InteractionButton.ts';
import feelingsModal from '@/interactions/modals/feelingsModal.ts';
import { ButtonBuilder, type ButtonInteraction, ButtonStyle } from 'discord.js';

const buttonId = 'feelingsSurvey';

export const buttonConfig = new ButtonBuilder()
	.setLabel('Survey')
	.setEmoji('🥰')
	.setCustomId(buttonId)
	.setStyle(ButtonStyle.Primary);

async function interactionHandler(interaction: ButtonInteraction) {
	await interaction.showModal(feelingsModal.builder);
}

const FeelingsSurveyButton = new InteractionButton(buttonId, buttonConfig, interactionHandler);

export default FeelingsSurveyButton;
