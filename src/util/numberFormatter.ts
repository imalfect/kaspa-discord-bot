export function formatNumber(number: number | string, decimalPoints = 2) {
	return parseFloat(number as string).toLocaleString('en-US', {
		style: 'decimal',
		useGrouping: true,
		minimumFractionDigits: decimalPoints,
		maximumFractionDigits: decimalPoints
	});
}
