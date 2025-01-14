import Big from 'big.js';

export default function sompiToKas(sompi: bigint | string): number {
	// @ts-expect-error	The typing is wrong, Big takes bigint
	return Big(sompi).div(1e8).toNumber();
}
