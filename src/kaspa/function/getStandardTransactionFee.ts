// A regular transaction is considered to be a 1 input, 2 output transaction.
import { kaspa } from '@/kaspa';
import { STANDARD_TRANSACTION_MASS } from '@/kaspa/constants.ts';

export default async function getStandardTransactionFee() {
	const feeRate = await kaspa.getFeeEstimate({});
	return feeRate.estimate.normalBuckets[0].feerate * STANDARD_TRANSACTION_MASS;
}
