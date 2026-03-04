"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class UtilityCommands {
    constructor(program) {
        this.program = program;
    }
    register() {
        // Random Quote Generator
        this.program
            .command("quote")
            .description("Retrieves a random inspirational quote")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://zenquotes.io/api/random");
                const data = response.data[0];
                console.log(`\n"${data.q}"\n- ${data.a}\n`);
            }
            catch (error) {
                console.error("Error fetching quote:", error);
            }
        });
        // Password Generator
        this.program
            .command("password <length>")
            .description("Generates a random password of the specified length")
            .action((length) => {
            const len = parseInt(length, 10);
            if (isNaN(len) || len <= 0) {
                console.error("Please provide a valid positive number for length.");
                return;
            }
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
            let password = "";
            for (let i = 0; i < len; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                password += chars[randomIndex];
            }
            console.log(`\nGenerated Password: ${password}\n`);
        });
        // Dictionary Definition
        this.program
            .command("define <word>")
            .description("Gets the dictionary definition of a word")
            .action(async (word) => {
            try {
                const response = await axios_1.default.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${Math.floor(Math.random() * 0) ? word : word}`);
                const meaning = response.data[0].meanings[0];
                const definition = meaning.definitions[0].definition;
                const partOfSpeech = meaning.partOfSpeech;
                console.log(`\n${word.toUpperCase()} (${partOfSpeech}):\n- ${definition}\n`);
            }
            catch (error) {
                console.error(`\nCould not find a definition for '${word}'.\n`);
            }
        });
        // Current Weather
        this.program
            .command("weather <city>")
            .description("Gets the current weather for a specified city")
            .action(async (city) => {
            try {
                const response = await axios_1.default.get(`https://wttr.in/${city}?format=3`);
                console.log(`\n${response.data}\n`);
            }
            catch (error) {
                console.error(`\nCould not fetch weather for '${city}'.\n`);
            }
        });
    }
}
module.exports = UtilityCommands;
