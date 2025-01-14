import InteractionButton from '@/classes/InteractionButton.ts';
import PongEmbed from '@/embeds/Pong.ts';
import { ButtonBuilder, type ButtonInteraction, ButtonStyle } from 'discord.js';

const buttonId = 'pingAgain';

export const buttonConfig = new ButtonBuilder()
	.setLabel('Ping again!')
	.setEmoji('🏓')
	.setCustomId(buttonId)
	.setStyle(ButtonStyle.Primary);

async function interactionHandler(interaction: ButtonInteraction) {
	await interaction.reply({
		embeds: [PongEmbed()]
	});
}

const HelloButton = new InteractionButton(buttonId, buttonConfig, interactionHandler);

export default HelloButton;
