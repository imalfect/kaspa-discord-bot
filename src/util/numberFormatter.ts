export function formatNumber(number: number, decimalPoints = 2) {
	return number.toLocaleString('en-US', {
		style: 'decimal',
		useGrouping: true,
		minimumFractionDigits: decimalPoints,
		maximumFractionDigits: decimalPoints
	});
}
