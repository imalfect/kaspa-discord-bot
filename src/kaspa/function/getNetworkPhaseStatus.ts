import { DEFLATIONARY_TABLE } from '@/kaspa/constants.ts';
import type { BlockRewardReductionRecord } from '@/kaspa/types.ts';
import Big from 'big.js';
import dayjs from 'dayjs';

export default function getNetworkPhaseStatus(daaScore: bigint) {
	const nextPhaseIndex = DEFLATIONARY_TABLE.findIndex((phase) => phase.daaStart > daaScore);
	const nextPhase = DEFLATIONARY_TABLE[nextPhaseIndex];
	const currentPhase = DEFLATIONARY_TABLE[nextPhaseIndex < 1 ? 0 : nextPhaseIndex - 1];
	// @ts-expect-error The typing is wrong, Big takes bigint
	const nextPhaseStart = dayjs().add(Big(nextPhase.daaStart).minus(daaScore).toNumber(), 'seconds');
	return {
		currentPhase,
		nextPhase: nextPhase as BlockRewardReductionRecord | undefined,
		nextPhaseStart: nextPhaseStart ? nextPhaseStart.format('YYYY-MM-DD') : undefined
	};
}
