# Kaspa Discord Bot
Nicely done helper bot for the official Kaspa discord, it provides stats about the network on the channel list.

## Supported Stats
Here are the following stats the bot supports:
- Hashrate
- Last block fees
- Last block reward
- Next phase (reward reduction)
- Circulating supply
- X Followers
- Discord Members
- Telegram Members

## Key Used libraries
- [discord.js](https://discord.js.org/)
- [Kaspa WASM](https://github.com/kaspanet/rusty-kaspa)
- [cron](https://www.npmjs.com/package/cron)

## Code structure, core functionality
This bot uses [my own template for discord bots](https://github.com/imalfect/discord-bot-template), you can find more information about the file structure there.
The usage of this template is the reason there are so many files, while the bot itself is quite simple, the template is made to be easily extensible, as it supports buttons, slash commands, discord modals, cronjobs, and so on. This can potentially be used for future features.

## License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

