import { ConfigProps } from './config.interface';

export const config = (): ConfigProps => ({
	opensecrets: {
		api_key: process.env.OPENSECRETS_API_KEY
	}
});
