import { kaspa } from '@/kaspa';

export default async function getNetworkHashrate(): Promise<bigint> {
	const hashrateData = await kaspa.estimateNetworkHashesPerSecond({
		windowSize: 1000
	});
	return hashrateData.networkHashesPerSecond;
}
