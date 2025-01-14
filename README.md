# Discord Bot Template
A simple yet organized discord bot template utilizing discord.js and Bun as runtime.

## Features
Here are some of the features the bot template has:
- Discord Slash Commands
- Discord Modals
- Discord Buttons
- DiscordJS Events
- Cron Jobs
- Automatic error handling

## Installation
1. Clone the repository
2. Install the dependencies
```$ bun install```
3. Copy the `.env.example` file to `.env` and fill in the required fields, they're self-explanatory.
4. *OPTIONAL*: Configure `eslint` and `prettier` to your liking.
5. Start the bot
```$ bun start```

## Utility Scripts
- `bun start` - Start the bot
- `bun dev` - Start the bot in development mode **NOTE: Discord doesn't necessarily like such frequent restarts of the bot, and proceeds to rate limit it, this might not work as well as expected**
- `bun run reload-commands` - Reload slash commands
- `bun run delete-commands` - Delete all slash commands

## What are command scopes?
Commands scopes let you limit the command execution to a specific place, that is:
- User DMs
- Guilds
- Both

If the scope doesn't match the command's scope, the command won't be executed and an error will be thrown instead (See `ScopeMismatchEmbed`).
To set the scope of a command, you can set it in the command's constructor parameters.
You can see an example of this in the `ping` command where the scope enum is used.

## How to create a command?
To create a command, you need to create a new file in the `commands` directory.
The file should follow a similar pattern to the `ping` command. Define all the necessary variables and methods, create a class with them and export it.

Similar practice follows with modals and buttons.

## Support
There is no support, I built this template to use in my future projects, it's here if you need a quick start to your discord bot and already have experience with discord.js and basic JavaScript & TypeScript.

## License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

