import { kaspa } from '@/kaspa';

export default async function getNetworkHashrate(): Promise<bigint> {
	const hashrateData = await kaspa.estimateNetworkHashesPerSecond({
		windowSize: 10000
	});
	return hashrateData.networkHashesPerSecond;
}
