export default function handleStatsRequestError(error: Error) {
	console.error(`Stats request failed: ${error.message}`);
	return null;
}
