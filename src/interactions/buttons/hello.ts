import InteractionButton from '@/classes/InteractionButton.ts';
import PongEmbed from '@/embeds/Pong.ts';
import { ButtonBuilder, type ButtonInteraction, ButtonStyle, ChannelType } from 'discord.js';

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
	// const channel1 = await setChannelName('1325768086451650563', 'kaffin is a nerd' + Math.random());
	// const channel2 = await setChannelName('1326685288239595520', 'kaffin is a nerd 2' + Math.random());
	// const channel3 = await setChannelName('1326685301862826034', 'kaffin is a nerd 3' + Math.random());
	// const channel4 = await setChannelName('1326685318161764463', 'kaffin is a nerd 4' + Math.random());
	await interaction.guild?.channels.create({
		name: 'kaffin is a nerd' + Math.random(),
		type: ChannelType.GuildText
	});
	await interaction.guild?.channels.create({
		name: 'kaffin is a nerd' + Math.random(),
		type: ChannelType.GuildText
	});
	await interaction.guild?.channels.create({
		name: 'kaffin is a nerd' + Math.random(),
		type: ChannelType.GuildText
	});
	await interaction.guild?.channels.create({
		name: 'kaffin is a nerd' + Math.random(),
		type: ChannelType.GuildText
	});
	await interaction.guild?.channels.create({
		name: 'kaffin is a nerd' + Math.random(),
		type: ChannelType.GuildText
	});
	await interaction.guild?.channels.create({
		name: 'kaffin is a nerd' + Math.random(),
		type: ChannelType.GuildText
	});
	await interaction.guild?.channels.create({
		name: 'kaffin is a nerd' + Math.random(),
		type: ChannelType.GuildText
	});
}

const HelloButton = new InteractionButton(buttonId, buttonConfig, interactionHandler);

export default HelloButton;
