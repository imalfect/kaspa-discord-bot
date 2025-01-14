import Big from 'big.js';

const units: {
	unit: string;
	value: Big;
}[] = [
	{ unit: 'KH/s', value: Big(10).pow(3) },
	{ unit: 'MH/s', value: Big(10).pow(6) },
	{ unit: 'GH/s', value: Big(10).pow(9) },
	{ unit: 'TH/s', value: Big(10).pow(12) },
	{ unit: 'PH/s', value: Big(10).pow(15) },
	{ unit: 'EH/s', value: Big(10).pow(18) },
	{ unit: 'ZH/s', value: Big(10).pow(21) }
].reverse();

export default function formatHashrate(hashrate: bigint) {
	// @ts-expect-error The typing is wrong, Big takes bigint
	const hashrateBig = Big(hashrate);
	for (const { unit, value } of units) {
		if (hashrateBig.gte(value)) {
			return hashrateBig.div(value).toFixed(2).concat(' ', unit);
		}
	}
	return hashrateBig.toFixed(2).concat(' ', 'H/s');
}
