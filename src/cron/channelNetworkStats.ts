import { kaspa } from '@/kaspa';
import getBlockSummary from '@/kaspa/function/getBlockSummary.ts';
import getCirculatingSupply from '@/kaspa/function/getCirculatingSupply.ts';
import getNetworkHashrate from '@/kaspa/function/getNetworkHashrate.ts';
import getNetworkPhaseStatus from '@/kaspa/function/getNetworkPhaseStatus.ts';
import getStandardTransactionFee from '@/kaspa/function/getStandardTransactionFee.ts';
import { StatsChannel } from '@/types/StatsChannel.ts';
import updateStatsChannel from '@/util/discord/updateStatsChannel.ts';
import handleStatsRequestError from '@/util/handleStatsRequestError.ts';
import formatHashrate from '@/util/kaspa/formatHashrate.ts';
import sompiToKas from '@/util/kaspa/sompiToKas.ts';
import { formatNumber } from '@/util/numberFormatter.ts';
import Big from 'big.js';
import { CronJob } from 'cron';

async function channelNetworkStatsCron() {
	try {
		if (!kaspa.isConnected) {
			console.warn('Kaspa node is not connected, skipping network stats');
			return;
		}
		const hashrate = await getNetworkHashrate().catch(handleStatsRequestError);
		const supply = await getCirculatingSupply().catch(handleStatsRequestError);
		const dagInfo = await kaspa.getBlockDagInfo();
		const blockSummary = await getBlockSummary(dagInfo.sink).catch(handleStatsRequestError);
		const phaseStatus = getNetworkPhaseStatus(dagInfo.virtualDaaScore);
		const standardTransactionFee = await getStandardTransactionFee();
		if (hashrate !== null)
			await updateStatsChannel(StatsChannel.Hashrate, `hashrate: ${formatHashrate(hashrate)}`);

		if (supply !== null)
			await updateStatsChannel(StatsChannel.Supply, `supply: ${formatNumber(sompiToKas(supply), 0)}`);

		if (blockSummary !== null) {
			await updateStatsChannel(
				StatsChannel.BlockReward,
				`last-reward: ${formatNumber(phaseStatus.currentPhase.rewardPerDaa)} KAS`
			);
			await updateStatsChannel(
				StatsChannel.BlockFees,
				`last-fees: ${formatNumber(sompiToKas(blockSummary.blockReward) - phaseStatus.currentPhase.rewardPerDaa)} KAS`
			);
			await updateStatsChannel(
				StatsChannel.TPS,
				`TPS: ${formatNumber(blockSummary.transactionsCount, 0)} (${formatNumber(sompiToKas(blockSummary.totalOutputValue))} KAS/s)`
			);
		}
		await updateStatsChannel(
			StatsChannel.NextPhase,
			`next-phase: ${phaseStatus.nextPhaseStart ?? 'Mars landing 🪐'}`
		);

		if (standardTransactionFee !== null) {
			await updateStatsChannel(
				StatsChannel.TransactionFee,
				`tx-fee: ${
					new Big(standardTransactionFee).gte(1e5)
						? formatNumber(sompiToKas(standardTransactionFee), 4).concat(' KAS')
						: formatNumber(standardTransactionFee, 0).concat(' dwork')
				}`
			);
		}
		console.debug('set');
	} catch (e) {
		console.error(`An error encountered while running channelNetworkStatsCron: ${e}`);
	}
}

const channelNetworkStats = new CronJob(
	'*/5 * * * *',
	channelNetworkStatsCron,
	null,
	false,
	'America/Los_Angeles',
	null,
	false,
	null,
	null,
	true
);

export default channelNetworkStats;
