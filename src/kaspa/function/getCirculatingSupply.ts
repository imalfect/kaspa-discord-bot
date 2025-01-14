import { kaspa } from '@/kaspa';

export default async function getCirculatingSupply(): Promise<bigint> {
	const supplyData = await kaspa.getCoinSupply();
	return supplyData.circulatingSompi;
}
