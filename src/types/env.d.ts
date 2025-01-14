declare global {
	namespace NodeJS {
		// noinspection JSUnusedGlobalSymbols
		interface ProcessEnv {
			LMDB_PATH: string;
			DISCORD_BOT_TOKEN: string;
			DISCORD_SESSIONS_CATEGORY_ID: string;
			DISCORD_CLIENT_ID: string;
			DISCORD_GUILD_ID: string;
			NYADAEMON_URL: string;
		}
	}
}
