import { CRESCENDO_ACTIVATION_DAA, DEFLATIONARY_TABLE } from '@/kaspa/constants.ts';
import type { BlockRewardReductionRecord } from '@/kaspa/types.ts';
import Big from 'big.js';

export default function getNetworkPhaseStatus(daaScore: bigint) {
	const nextPhaseIndex = DEFLATIONARY_TABLE.findIndex((phase) => phase.daaStart > daaScore);
	const nextPhase = DEFLATIONARY_TABLE[nextPhaseIndex];
	const currentPhase = DEFLATIONARY_TABLE[nextPhaseIndex < 1 ? 0 : nextPhaseIndex - 1];
	let nextPhaseStart;
	if (nextPhase) {
		const bigDaaScore = new Big(daaScore.toString());
		const bigNextPhaseDaaStart = new Big(nextPhase.daaStart);
		const bigCrescendoActivationDaa = new Big(CRESCENDO_ACTIVATION_DAA);

		const daaScoreRemaining = bigNextPhaseDaaStart.minus(bigDaaScore);
		const secondsRemaining = daaScoreRemaining.gt(0)
			? bigDaaScore.lt(bigCrescendoActivationDaa) && bigNextPhaseDaaStart.gt(bigCrescendoActivationDaa)
				? bigCrescendoActivationDaa
						.minus(bigDaaScore)
						.plus(bigNextPhaseDaaStart.minus(bigCrescendoActivationDaa).div(10))
						.toNumber()
				: (bigDaaScore.lt(bigCrescendoActivationDaa)
						? daaScoreRemaining
						: daaScoreRemaining.div(10)
					).toNumber()
			: 0;

		nextPhaseStart =
			secondsRemaining > 0 ? new Date(Date.now() + secondsRemaining * 1000) : undefined;
	}
	return {
		currentPhase,
		nextPhase: nextPhase as BlockRewardReductionRecord | undefined,
		nextPhaseStart: nextPhaseStart ? nextPhaseStart.toISOString().slice(0, 10) : undefined
	};
}
