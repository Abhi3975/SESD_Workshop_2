# MyCLI

A custom Command Line Interface (CLI) built with TypeScript and Node.js. It features a variety of helpful and fun commands to assist you right from your terminal.

## Installation

Make sure you have Node.js and npm installed.

```bash
# Clone the repository
git clone https://github.com/Abhi3975/SESD_Workshop_2.git

# Navigate into the directory
cd SESD_Workshop_2

# Install dependencies
npm install

# Build the TypeScript files
npx tsc

# Link the package globally so you can use 'mycli' anywhere
npm link
```

## Available Commands

Here are all the commands you can use with `mycli`:

### Core Commands

*   `mycli init-ts <foldername>`: Initializes a standard TypeScript project structure in a new folder, installing dependencies and creating the necessary config files.
*   `mycli greet <name>`: Simple greeting command. Use `-e` or `--excited` for extra enthusiasm.

### Math Commands
*   `mycli add <n1> <n2>`: Adds two numbers together. (Output format: `n1 + n2 = result`)
*   `mycli subtract <n1> <n2>`: Subtracts the second number from the first. (Output format: `n1 - n2 = result`)
*   `mycli multiply <n1> <n2>`: Multiplies two numbers together. (Output format: `n1 * n2 = result`)
*   `mycli divide <n1> <n2>`: Divides the first number by the second. (Output format: `n1 / n2 = result`)

### Fun & Utility Commands
*   `mycli joke`: Tells a random programming joke with clear labels for setup and punchline.
*   `mycli pokemon`: Gets the name of a random Pokemon (e.g., "A wild Pikachu appeared!").
*   `mycli quote`: Retrieves a random inspirational quote from ZenQuotes.
*   `mycli password <length>`: Generates a strong, random password of the specified length.
*   `mycli define <word>`: Looks up the dictionary definition, part of speech, and meaning of the provided word.
*   `mycli weather <city>`: Gets the current temperature and conditions for a specified city using OpenStreetMap and Open-Meteo.

## Adding New Commands

To add a new command:
1.  Create a new `[name]_command.ts` file in the `commands/` directory.
2.  Define a class that sets up the command using `this.program.command()`.
3.  Require the new command file in `cli.ts`.
4.  Add the imported module instances to the `engine.registerCommands([])` array.
5.  Run `npx tsc` to build the new changes.
