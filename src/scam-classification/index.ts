// Experimenting to see if classes would be cleaner than a functions dir
// The whole scam detector api (basically a single python file) as well as training scripts will be open sourced once (and if) everything seems suitable for full-on production use
import type { ClassifyResponse, ScamClassifierClass } from '@/scam-classification/types.ts';
import { type $Fetch, ofetch } from 'ofetch';

export class ScamClassifier implements ScamClassifierClass {
	private readonly instanceUrl: string;
	private readonly detectorApi: $Fetch;
	constructor(instanceUrl: string) {
		this.instanceUrl = instanceUrl;
		this.detectorApi = ofetch.create({
			baseURL: instanceUrl
		});
	}

	async classify(message: string) {
		if (!message) {
			return 0;
		}
		const classification = await this.detectorApi<ClassifyResponse>('/classify', {
			method: 'POST',
			body: {
				text: message
			}
		}).catch((e) => {
			console.error(e);
			return null;
		});
		if (classification === null) {
			return null;
		}
		return classification.scamConfidence;
	}
}
