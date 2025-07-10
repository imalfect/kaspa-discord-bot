// This file provides all the necessary non-secret configuration
import { StatsChannel } from '@/types/StatsChannel.ts';

export const statsChannelIds: { [key in StatsChannel]: string } = {
	[StatsChannel.Price]: '1046804251948617810',
	[StatsChannel.Hashrate]: '1046804284504809542',
	[StatsChannel.BlockReward]: '1047470565910380594',
	[StatsChannel.BlockFees]: '1047470595241168996',
	[StatsChannel.TransactionFee]: '1046804311864258652',
	[StatsChannel.NextPhase]: '1047470535019352084',
	[StatsChannel.Supply]: '1046804335947952158',
	[StatsChannel.TPS]: '1046804371331088384',
	[StatsChannel.XFollowers]: '1046804400481513555',
	[StatsChannel.DiscordMembers]: '1331311810275442791',
	[StatsChannel.TelegramMembers]: '1331311833516216441',
	[StatsChannel.CrescendoCountdown]: '1368927211146575903'
};

export const priceCoinId = 'kaspa';

export const priceCurrency = 'usd';

export const twitterHandle = 'kaspaunchained';

export const telegramChannel = '@kaspaenglish';
