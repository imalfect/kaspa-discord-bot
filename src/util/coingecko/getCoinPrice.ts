export default async function getCoinPrice(coinId: string, currency: string): Promise<number> {
	return await fetch(
		`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${currency}`
	)
		.then((response) => response.json())
		.then((data) => data[coinId][currency])
		.catch(() => null);
}
