// This file provides all the necessary non-secret configuration
import { StatsChannel } from '@/types/StatsChannel.ts';

export const statsChannelIds: { [key in StatsChannel]: string } = {
	[StatsChannel.Price]: '1328783776846970973',
	[StatsChannel.Hashrate]: '1327414213521571870',
	[StatsChannel.BlockReward]: '1328515610161713183',
	[StatsChannel.BlockFees]: '1328515568680177735',
	[StatsChannel.NextPhase]: '1328515515685273723',
	[StatsChannel.Supply]: '1327414319717154997',
	[StatsChannel.TPS]: '1327986228192084048',
	[StatsChannel.XFollowers]: '1327414370493530213',
	[StatsChannel.DiscordMembers]: '1327414393109086341',
	[StatsChannel.TelegramMembers]: '1327414418417516655'
};

export const priceCoinId = 'kaspa';

export const priceCurrency = 'usd';

export const twitterHandle = 'kaspacurrency';

export const telegramChannel = '@kaspaenglish';
