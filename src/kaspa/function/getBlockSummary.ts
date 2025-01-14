import { kaspa } from '@/kaspa';

export default async function getBlockSummary(blockHash: string) {
	const { block } = await kaspa.getBlock({
		hash: blockHash,
		includeTransactions: true
	});
	const transactionsCount = block.transactions.length;
	const totalOutputValue = block.transactions.reduce((acc: bigint, tx) => {
		return acc + tx.outputs.reduce((acc, output) => acc + output.value, 0n);
	}, 0n);
	return {
		transactionsCount,
		totalOutputValue,
		blockReward: block.transactions[0].outputs[0].value
	};
}

// NOTE: This also includes the coinbase transaction and its output.
