// Removing gifs, links and mentions from messages
import * as linkify from 'linkifyjs';
import removeMd from 'remove-markdown';
export default function sanitizeMessage(message: string) {
	// Remove links (should also effectively remove gifs)
	message = removeMd(message);
	linkify.registerCustomProtocol('discord', true)
	const links = linkify.find(message);
	if (links.length) {
		for (const link of links) {
			message = message.replace(link.value, '');
		}
	}

	// Remove mentions
	message = message.replace(/<@!?\d+>/g, '');
	return message;
}
