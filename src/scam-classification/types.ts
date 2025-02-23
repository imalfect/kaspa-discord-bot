export interface ScamClassifierClass {
	classify(message: string): Promise<number | null>;
}

export interface ClassifyResponse {
	label: string;
	scamConfidence: number;
	legitConfidence: number;
}
