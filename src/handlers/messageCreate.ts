import ScamMessageDetected from '@/embeds/ScamMessageDetected.ts';
import { scamClassifier } from '@/index.ts';
import sanitizeMessage from '@/util/sanitizeMessage.ts';
import { Message, type OmitPartialGroupDMChannel } from 'discord.js';

async function messageCreate(message: OmitPartialGroupDMChannel<Message<boolean>>) {
	// Ignore messages from bots
	if (message.author.bot) return;
	if (!message.inGuild()) return;
	// Process the content
	const sanitizedMessage = sanitizeMessage(message.content);
	if (!sanitizedMessage) {
		// Message empty, likely only an attachment/mention/link
		return;
	}
	const p = performance.now();
	const classification = await scamClassifier.classify(sanitizedMessage);
	const timeTaken = performance.now() - p;
	if (!classification) {
		// No classification found
		console.warn(`No scam classification returned from server, check server status`);
		return;
	}
	// Send all messages with a confidence of 0.5 or higher to the notifications channel, threshold to be tuned later
	if (classification > 0.5) {
		console.log(
			`Message classified as scam with confidence of ${classification}, sending to notifications channel`
		);
		const embed = ScamMessageDetected({
			userId: message.author.id,
			message: message.content,
			confidence: classification,
			timeTaken,
			joinTimestamp: message.member?.joinedTimestamp || 0
		});
		const scamNotificationsChannel = await message.guild.channels.fetch(
			process.env.SCAM_NOTIFICATIONS_CHANNEL_ID as string
		);
		if (scamNotificationsChannel && scamNotificationsChannel.isSendable()) {
			await scamNotificationsChannel.send({ embeds: [embed] }).catch((e) => {
				console.warn(`Could not send scam notification: ${e}`);
			});
		} else {
			console.warn(`Could not find or send to scam notifications channel`);
		}
	}
}

export default messageCreate;
