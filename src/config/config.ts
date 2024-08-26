import { ConfigProps } from './config.interface';

export const config = (): ConfigProps => ({
	opensecrets: {
		apiKey: process.env.OPENSECRETS_API_KEY
	}
});
