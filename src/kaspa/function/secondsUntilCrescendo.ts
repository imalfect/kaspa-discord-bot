import { kaspa } from '@/kaspa';

export default async function secondsUntilCrescendo() {
	const dagInfo = await kaspa.getBlockDagInfo();
	const daaScore = parseInt(dagInfo.virtualDaaScore.toString());
	const goal = 110165000;
	return goal - daaScore;
}
