import { kaspa } from '@/kaspa';
// NOTE: This retrieves the block reward AND the transaction fees from the block
export default async function getBlockReward(blockHash: string) {
	const { block: sinkBlock } = await kaspa.getBlock({
		hash: blockHash,
		includeTransactions: true
	});
	return sinkBlock.transactions[0].outputs[0].value;
}
