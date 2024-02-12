import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.badend.tiktokharbor',
	appName: 'tiktok-harbor',
	webDir: 'build',
	server: {
		androidScheme: 'https'
	}
};

export default config;
