import { ofetch } from 'ofetch';

export default async function getChatMemberCount(chatId: string) {
	const memberCount = await ofetch<{
		ok: boolean;
		result: number;
	}>(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/getChatMemberCount`, {
		query: {
			chat_id: chatId
		}
	}).catch(() => {
		return null;
	});
	if (!memberCount?.ok) {
		throw new Error('Failed to get telegram chat member count');
	} else {
		return memberCount.result;
	}
}
