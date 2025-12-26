// Removing gifs, links and mentions from messages
import * as linkify from 'linkifyjs';
import removeMd from 'remove-markdown';

linkify.registerCustomProtocol('discord', true);

export default function sanitizeMessage(message: string) {
	// Remove links (should also effectively remove gifs)
	message = removeMd(message);
	const links = linkify.find(message);
	if (links.length) {
		for (const link of links) {
			message = message.replace(link.value, '');
		}
	}
	// Remove mentions
	message = message.replace(/<@!?\d+>/g, '');
	// Remove extra whitespace
	message = message.replace(/\s+/g, ' ').trim();
	// Remove new lines
	message = message.replace(/[\r\n]+/g, ' ');
	// Remove emojis
	message = message.replace(/<a?:\w+:\d+>/g, '');
	// Remove non-alphanumeric characters
	message = message.replace(/[^\p{L}\p{N}\s]+/gu, '');
	// Remove extra whitespace
	message = message.replace(/\s+/g, ' ');
	// Final trim
	message = message.trim();
	return message;
}
