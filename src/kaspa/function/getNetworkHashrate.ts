import { kaspa } from '@/kaspa';

export default async function getNetworkHashrate(): Promise<bigint> {
	const hashrateData = await kaspa.getBlockDagInfo({});

	const hashRate = hashrateData.difficulty * 2 * 10;

	return BigInt(hashRate);
}
