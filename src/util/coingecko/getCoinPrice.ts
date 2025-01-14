import { ofetch } from 'ofetch';

export default async function getCoinPrice(
	coinId: string,
	currency: string
): Promise<number | null> {
	return await ofetch<{
		[coinId: string]: {
			[currency: string]: number;
		};
	}>(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${currency}`)
		.then((data) => data[coinId][currency])
		.catch(() => null);
}
